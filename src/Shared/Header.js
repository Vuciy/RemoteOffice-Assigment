import React from "react";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Financial Report
        </a>
      </nav>
    </header>
  );
}

document.title = "Home";
export default Header;
