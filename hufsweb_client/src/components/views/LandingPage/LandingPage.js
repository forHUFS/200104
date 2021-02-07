import React from "react";
import NavBar from "../NavBar/NavBar"
import NavContainer from "../NavBar/NavContainer"
import Center from "./Center"
import Footer from "../Footer/Footer"
function LandingPage() {
  return (
    <div>
      <div>
         <NavBar /> 
         <NavContainer />
         <Center />
         <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
