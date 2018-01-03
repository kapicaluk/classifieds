import React from "react";
const Navbar = () => {
  return (
    <div id="navigation">
      <nav className="navbar">
        <ul>
          <a href="http://google.com"><li>Profile</li></a>
          <li>Listings</li>
          <li>Add Listing</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
