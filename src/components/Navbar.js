import React from "react";

const Navbar = () => {
    const logoPath = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo"
             src={logoPath}
             className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;