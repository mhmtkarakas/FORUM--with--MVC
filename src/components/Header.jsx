import React from "react";
import { Link } from "react-router-dom";

const Header = ({ addLink }) => {
  return (
    <header>
      <h1>Forum</h1>
      {addLink ? (
        <Link className="link" to={"/"}>
          Anasayfaya Don
        </Link>
      ) : (
        <Link className="link" to={"/add-post"}>
          Gonderi Olustur
        </Link>
      )}
    </header>
  );
};

export default Header;
