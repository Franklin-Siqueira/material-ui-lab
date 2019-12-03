/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Header.jsx

*/
import React from "react";
//
// const imgPicsum = "https://picsum.photos/100";
//
function Header() {
  return (
    <header>
      <h1>
        <span><img src="./img/favicons/favicon-32x32.png" alt="" /></span>
        .KeepUp!
      </h1>
    </header>
  );
}
//
export default Header;
// <header>
//   <h1>
//     Keeper App
//     <span>
//       <img src={imgPicsum} alt="" />
//     </span>
//     <span>
//       <img src={imgPicsum + "?grayscale"} alt="" />
//     </span>
//   </h1>
//   <hr />
// </header>
