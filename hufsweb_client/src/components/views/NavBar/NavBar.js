import React from 'react'




import "./NavBar.css"
function NavBar() {
    return (
        <div style={{overflow:"hiiden",clear:"both",width:"100%"}}>
        <div className="navBar">
          <div style={{float:"left"}}>로고</div>
          <div style={{float:"right"}}>통합검색</div>
        </div> {/*네비게이션  상단 바 */}
      </div>  
    )
}

export default NavBar
