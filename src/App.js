import "./App.css";
import logo from "./images/Logo-TL.png";
import websiteIcon from "./images/website-icon-29494-removebg-preview.png";
import BasicSlider from "./Components/BasicSlider";
import Tooltip from "@mui/material/Tooltip";
import AppointmentLayout from "./Components/AppointmentLayout";
import React from "react";

function App() {
   // <======================================== NOTES START ==============================================>

  // Libraries used : "material-ui" , "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code:
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : May/22/2024 || created by : Abid NK   || module : Being Digital ||
  // modified date : Jun/01/2024 || modified by : Abid NK  || module : Cloned the code and made the relevent changes ||
  // modified date : Jun/03/2024 || modified by : Abid NK  || module : Changed the coveer image ||
  // modified date : Jun/04/2024 || modified by : Abid NK  || module : Changed the input section, add a search option in the dropdown ||
  // modified date : Jun/05/2024 || modified by : Abid NK  || module : Add whole country list in the dropdown ||
  // modified date : Jun/06/2024 || modified by : Abid NK  || module : Made the site fully responsive in Mobile phones, tablets, laptops ||
  // modified date : Jun/13/2024 || modified by : Abid NK  || module : Add country code option in phone number||

  // Technical summary(Pre-setups) created date/by :  Abid NK ||
  // Domain :godaddy || https://connect.tltechnologies.net/  ||
  // Hosting :  SmarterASP.net  ||https://connect.tltechnologies.net/ || 
  // SSL : cloudflare(Confidential Sangi) ||
  // Database :  {.env} || 
  // Authors : {humans.txt} ||
  // Phase summary : SLP for TL Technologies  || created date/by : Abid NK Jun/01/2024   ||
  // Phase 1 :  SetUps:Clone github rep for the template, Install all node modules ||
  // Phase 2 :  Development/Main page creation: Implementing frontend layouts and user interfaces using React||
  // Phase 3 :  Production: Deploying the application to SmarterASP.net .  ||

  //Project summary: The Service Landing Page SLP is designed to connect users with the TL Technologies 
  //team by addressing their specific needs and facilitating effective communication. This platform aims
  //to enhance user engagement and provide a seamless experience for clients seeking our services.
  // <======================================== NOTES END ==============================================>
  return (
    <>
      <div className="backgroundImg flex md:justify-center w-full h-screen">
        {/* <==================== Webiste link as sticky ====================> */}
        <div className="globe absolute top-[90vh] right-7 hidden md:block z-50">
          <Tooltip title="Visit Our Site" placement="right-start" arrow>
            <a href="https://tltechnologies.net/" target="_blank">
              <img
                alt="Visit our site"
                src={websiteIcon}
                className="w-20"
              />
            </a>
          </Tooltip>
        </div>
        <div className="globe absolute top-[80vh] right-10 hidden md:block z-50">
          <Tooltip title="Connect Us" placement="right" arrow>
            <a
              href="https://wa.me/+919061432814?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6IzQwQzA1NzsiPgogICAgPHBhdGggZD0iTTI1LDJDMTIuMzE4LDIsMiwxMi4zMTgsMiwyNWMwLDMuOTYsMS4wMjMsNy44NTQsMi45NjMsMTEuMjlMMi4wMzcsNDYuNzNjLTAuMDk2LDAuMzQzLTAuMDAzLDAuNzExLDAuMjQ1LDAuOTY2IEMyLjQ3Myw0Ny44OTMsMi43MzMsNDgsMyw0OGMwLjA4LDAsMC4xNjEtMC4wMSwwLjI0LTAuMDI5bDEwLjg5Ni0yLjY5OUMxNy40NjMsNDcuMDU4LDIxLjIxLDQ4LDI1LDQ4YzEyLjY4MiwwLDIzLTEwLjMxOCwyMy0yMyBTMzcuNjgyLDIsMjUsMnogTTM2LjU3LDMzLjExNmMtMC40OTIsMS4zNjItMi44NTIsMi42MDUtMy45ODYsMi43NzJjLTEuMDE4LDAuMTQ5LTIuMzA2LDAuMjEzLTMuNzItMC4yMzEgYy0wLjg1Ny0wLjI3LTEuOTU3LTAuNjI4LTMuMzY2LTEuMjI5Yy01LjkyMy0yLjUyNi05Ljc5MS04LjQxNS0xMC4wODctOC44MDRDMTUuMTE2LDI1LjIzNSwxMywyMi40NjMsMTMsMTkuNTk0IHMxLjUyNS00LjI4LDIuMDY3LTQuODY0YzAuNTQyLTAuNTg0LDEuMTgxLTAuNzMsMS41NzUtMC43M3MwLjc4NywwLjAwNSwxLjEzMiwwLjAyMWMwLjM2MywwLjAxOCwwLjg1LTAuMTM3LDEuMzI5LDEuMDAxIGMwLjQ5MiwxLjE2OCwxLjY3Myw0LjAzNywxLjgxOSw0LjMzYzAuMTQ4LDAuMjkyLDAuMjQ2LDAuNjMzLDAuMDUsMS4wMjJjLTAuMTk2LDAuMzg5LTAuMjk0LDAuNjMyLTAuNTksMC45NzMgcy0wLjYyLDAuNzYtMC44ODYsMS4wMjJjLTAuMjk2LDAuMjkxLTAuNjAzLDAuNjA2LTAuMjU5LDEuMTljMC4zNDQsMC41ODQsMS41MjksMi40OTMsMy4yODUsNC4wMzkgYzIuMjU1LDEuOTg2LDQuMTU4LDIuNjAyLDQuNzQ4LDIuODk0YzAuNTksMC4yOTIsMC45MzUsMC4yNDMsMS4yNzktMC4xNDZjMC4zNDQtMC4zOSwxLjQ3Ni0xLjcwMywxLjg2OS0yLjI4NiBzMC43ODctMC40ODcsMS4zMjktMC4yOTJjMC41NDIsMC4xOTQsMy40NDUsMS42MDQsNC4wMzUsMS44OTZjMC41OSwwLjI5MiwwLjk4NCwwLjQzOCwxLjEzMiwwLjY4MSBDMzcuMDYyLDMwLjU4NywzNy4wNjIsMzEuNzU1LDM2LjU3LDMzLjExNnoiPjwvcGF0aD4KPC9zdmc+"
              />
            </a>
          </Tooltip>
        </div>
        <div className="zoom w-[60%] pt-10 pb-10">
          {/* <==================== HEADER ====================> */}
          <div className="mt-[-35px]">
            <div className="flex justify-between h-[100px] mb-10 ml-9">
              <div className="nav flex justify-center mr-12 md:mr-0 mt-6 md:mt-0 md:mb-[-50px] md:ml-[-40px]">
                <p className="text-white text-5xl font-bold grid place-content-center text-shadow tracking-wider">
                  TL TECHNOLOGIES PVT LTD
                </p>
              </div>

              <img
                src={logo}
                alt="landingPageLogo"
                className="p-1 w-full md:mr-8 md:w-auto md:h-auto hidden sm:block lg-max:hidden md:mb-[-20px]"
              />
            </div>
          </div>
          {/* <==================== BODY ====================> */}
          <div className="grid lg-max:grid-cols-1 grid-cols-2 h-auto gap-x-5 justify-center items-center ml-10 md:ml-0">
            <div className="col-span-2 md:col-span-1">
              <BasicSlider />
            </div>
            <div className="col-span-2 md:col-span-1">
              <AppointmentLayout />
            </div>
          </div>
          {/* <==================== FOOTER ====================> */}
          <div className="md:w-[1020px] lg-max:w-[480px] sm-max:w-[405px] mt-[20px] md:mt-2 ml-10 md:ml-0">
            <div className="mt-0">
              <p className="bg-white rounded-lg p-1 text-center">
                Copyright © 2024
                <a
                  href="https://tltechnologies.net/"
                  target="_blank"
                  className="font-bold text-red-600 mr-1 ml-1"
                >
                  TL TECHNOLOGIES PVT LTD
                </a>
                All Rights Reserved.
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
