import React from "react";
import "./LandingPage.css";
import NavBar from "../NavBar/NavBar"
import NavContainer from "../NavBar/NavContainer"
import Center from "./Center"
function LandingPage() {
  return (
    <div>
      <div>
         <NavBar /> 
         <NavContainer />
         <Center />
      </div>
    </div>
  );
}

export default LandingPage;
