import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Select from "react-select";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import TL_Logo from "../images/Logo-TL.png";
import { SiGooglemybusiness } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Service options
const serviceOptions = [
  "Branding (Logo, Packaging, Label, Letterhead)",
  "Cloud Services (AWS, Azure)",
  "Database Migration",
  "Digital Marketing (FB, LinkedIn, YouTube, Google, Instagram)",
  "Domain Registration (DNS/SSL Management)",
  "Hosting (SQL, MySQL, FTP, Storage, Webmail)",
  "E-Commerce Websites (Checkout & Payment Integration)",
  "Email Exchange (Google)",
  "App/Project Support (Offshore/Onshore)",
  "Payment Gateway Integration",
  "SEO (Basic & Advanced)",
  "Social Media Management",
  "Software Consulting",
  "Video Management (Editing & Streaming)",
  "Websites (One Page & Multi-Page)",
  "Mobile App Development (iOS & Android)",
  "OTHER",
].map((service) => ({ value: service, label: service }));

// Country options
const countryOptions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cote d’Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia, Federated States of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Thailand",
  "The Gambia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United Republic of Tanzania",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].map((country) => ({ value: country, label: country }));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#777777",
    color: "rgba(255, 255, 255)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const AppointmentLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    persons: "",
    destination: "",
    message: "",
    fromDate: null,
    toDate: null,
    countryCode: "+",
  });
  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      number: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      number: "",
    }));
  };
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1,4})(\d{1,3})?(\d{1,3})?$/);

    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(" ");
    }

    return value;
  };
  const [errors, setErrors] = useState({});
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Limit message to 500 characters
    if (name === "message" && value.length > 500) return;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  
    // Update character count for message
    if (name === "message") {
      setCharacterCount(value.length);
    }
  };
  
  const handleClick = () => {
    window.location.href = "http://gkumar2018-001-site2.ktempurl.com/";
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOption,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please Enter Your Name";
      formValid = false;
    } else if (!/^[A-Za-z.]{3,}$/.test(formData.name.trim())) {
      newErrors.name = "Please Enter a Valid Name";
      formValid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Please Enter a Valid Phone Number";
      formValid = false;
    } else if (formData.number.length < 12) {
      newErrors.number = "Phone number must be at least 10 digits";
      formValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Please Enter Your Email";
      formValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      formValid = false;
    }

    if (!formData.selectedService) {
      newErrors.selectedService = "Please select a service";
      formValid = false;
    }

    if (!formData.selectedCountry) {
      newErrors.selectedCountry = "Please select your country";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const name = encodeURIComponent(formData.name);
      const email = encodeURIComponent(formData.email);
      const phoneNumber = encodeURIComponent(
        `${formData.countryCode}${formData.number.replace(/\D/g, "")}`
      );
      const selectedService = encodeURIComponent(
        formData.selectedService.value
      );
      const selectedCountry = encodeURIComponent(
        formData.selectedCountry.value
      );
      const userMessage = encodeURIComponent(formData.message);
      const message = `Name: ${name}%0AEmail: ${email}%0APhone Number: ${phoneNumber}%0AService: ${selectedService}%0ACountry: ${selectedCountry}%0AUser Message: ${userMessage}`;
      const whatsappUrl = `https://wa.me/+919061432814?text=${message}`;
      window.open(whatsappUrl, "_blank");
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
      console.log(errors); // Debugging line to log current errors
    }
  };

  return (
    <>
      <Box className="w-[405px] md:w-[480px] md:h-auto md:min-h-[660px] rounded-md bg-white md:bg-opacity-95 flex flex-col justify-start items-center">
        <form onSubmit={handleSubmit} className="ml-5 mt-3">
          <h2 className=" md:mr-0">Match Your Needs</h2>
          <div
            className="inputt w-[280px] md:w-[350px] mt-4 text-center"
            style={{ display: "flex" }}
          >
            <TextField
              id="name"
              name="name"
              label="Name *"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Please enter your full name.
                    <br />• Use your first name and last name.
                    <br />• Ensure there are no numbers.
                    <br />• Only use alphabetic characters. eg: "John Doe"
                  </Typography>
                </React.Fragment>
              }
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>

          {/* Phone number input with tooltips */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex" }}
          >
            <PhoneInput
              country={"in"} // default country
              value={formData.number}
              onChange={handlePhoneChange}
              inputProps={{
                name: "number",
                autoFocus: true,
                require: true,
              }}
              containerStyle={{ width: "100%", zIndex: 40 }} // Increase container width
              inputStyle={{ width: "100%", height: "50px", opacity: 0.7 }} // Increase input field width and height if needed
              error={!!errors.number}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter your phone number with the country code.
                    <br />• Do not include spaces or special characters within
                    the number.
                    <br />• Only use numeric characters.
                    <br />• eg: +1 8547854785
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {errors.number && (
            <div
              className="w-[280px] md:w-[350px]"
              style={{ color: "red", fontSize: "10px" }}
            >
              {errors.number}
            </div>
          )}

          <div
            className="inputt w-[280px] md:w-[350px] mt-4"
            style={{ display: "flex" }}
          >
            <TextField
              id="email-input"
              name="email"
              label="Email *"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Enter a valid email address.
                    <br />
                    • Do not include spaces.
                    <br />• Use the format: example@domain.com.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>

          <div
            className="w-[280px] md:w-[350px] mt-4"
            style={{ display: "flex" }}
          >
            <Select
              name="selectedService"
              options={serviceOptions}
              placeholder="Select a service *"
              value={formData.selectedService}
              onChange={handleSelectChange}
              className="w-full z-20"
              isSearchable
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Choose the service you are interested in.
                    <br />
                    • Ensure the service aligns with your goals.
                    <br />
                    • You can select only one service at a time.
                    <br />• Contact us for more information.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {errors.selectedService && (
            <div
              className="w-[280px] md:w-[350px]"
              style={{ color: "red", fontSize: "11px" }}
            >
              {errors.selectedService}
            </div>
          )}

          <div
            className="w-[280px] md:w-[350px] mt-4"
            style={{ display: "flex" }}
          >
            <Select
              name="selectedCountry"
              options={countryOptions}
              placeholder="Select your country *"
              value={formData.selectedCountry}
              onChange={handleSelectChange}
              className="w-full z-10"
              isSearchable
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Choose the country you are located in.
                    <br />
                    • Connecting you with the most appropriate support team.
                    <br />• We may offer services in your local currency for
                    easier transactions.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {errors.selectedCountry && (
            <div
              className="w-[280px] md:w-[350px]"
              style={{ color: "red", fontSize: "11px" }}
            >
              {errors.selectedCountry}
            </div>
          )}

          <div
            className="inputt w-[280px] md:w-[350px]  mt-4"
            style={{ display: "flex" }}
          >
            <TextField
    id="outlined-multiline-static"
    name="message"
    label="Message"
    multiline
    rows={2}
    fullWidth
    value={formData.message}
    onChange={handleInputChange}
    error={!!errors.message}
    helperText={`${characterCount}/500`}
  />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    • Describe your requirements or challenges.
                    <br />
                    • Mention any deadlines.
                    <br />• Provide additional details to help us understand
                    your needs.
                  </Typography>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>

          <div
            style={{ display: "grid", placeItems: "center", marginTop: "25px" }}
          >
            <Button variant="contained" color="success" type="submit">
              Let's Connect !
            </Button>
          </div>
        </form>

        <div className="social-media mt-4 md:mt-4 flex items-center">
          <a
            href="https://www.google.com/maps/place/TL+TECHNOLOGIES+PRIVATE+LIMITED/@8.5795247,76.8567485,16z/data=!4m6!3m5!1s0x3b05bfb13fa37fc1:0xf89d4bd32e84246f!8m2!3d8.5799619!4d76.8632868!16s%2Fg%2F11p5shtd3y?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaMapMarkerAlt className="text-blue-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/tltechnologiespvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaFacebookF className="text-blue-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/tltechnologiespvtltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaInstagram className="text-pink-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaYoutube className="text-red-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://in.pinterest.com/tltechnologiespvtltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaPinterest className="text-red-600 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/company/tltechnologiespvtltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaLinkedinIn className="text-blue-700 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://x.com/tl_technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <FaTwitter className="text-blue-500 text-3xl" />
            </IconButton>
          </a>
          <a
            href="https://g.co/kgs/kehDd8b"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-3"
          >
            <IconButton>
              <SiGooglemybusiness className="text-blue-600 text-3xl" />
            </IconButton>
          </a>
        </div>

        <div className="flex row md:mt-4 mt-4 md:mb-0 mb-4">
          <Button
            onClick={handleClick}
            style={{
              display: "block",
              textAlign: "left",
              padding: 10,
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
              backgroundColor: "white",
            }}
            className="footer-container p-4 md:p-6 mt-2 md:mt-4 md:mb-3 mb-3"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-black">
              <span
                style={{ color: "red" }}
                className="text-sm text-color-red md:text-base mr-0 md:mr-0 mb-4 md:mb-0"
              >
                Your IT & Marketing Partner <br />
              </span>
            </div>
          </Button>
          <div className="flex items-end text-xs md:text-sm">
            <img
              src={TL_Logo}
              className="h-12 w-12 ml-4 md:ml-2 mb-2 md:h-16 md:w-16 "
              alt="TL Technologies Logo"
            />
          </div>
        </div>
      </Box>
    </>
  );
};
export default AppointmentLayout;
