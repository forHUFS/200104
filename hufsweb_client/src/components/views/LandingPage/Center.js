import React from "react";

import LoginPage from "../LoginPage/LoginPage"
function Center() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          margin: "0 auto",
          width: "997px",
          backgroundColor: "skyblue",
        }}
      >
        <div>
          11<br/><LoginPage />
        </div>
      
      </div>
    </div>
  );
}

export default Center;
