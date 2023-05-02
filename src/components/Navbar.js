import React, {useContext} from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)
  const logoPath = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img alt="pokeapi-logo"
             src={logoPath}
             className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar