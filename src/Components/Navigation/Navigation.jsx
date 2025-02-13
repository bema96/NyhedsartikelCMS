import { useState } from "react";
import { NavStyled } from "./Navigation.styled";
import Logo from "../../Assets/INGN.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <NavStyled isOpen={isOpen}>

      <div className="nav-container">
        {/* Logo */}
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>


        {/* Burger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
       
      </div>

       {/* Navigation Menu */}
       <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={handleNavClick}>Alle</Link></li>
            <li><Link to="/category/indland" onClick={handleNavClick}>Indland</Link></li>
            <li><Link to="/category/udland" onClick={handleNavClick}>Udland</Link></li>
            <li><Link to="/category/teknologi" onClick={handleNavClick}>Teknologi</Link></li>
            <li><Link to="/category/sport" onClick={handleNavClick}>Sport</Link></li>
            <li><Link to="/category/politik" onClick={handleNavClick}>Politik</Link></li>
            <li><Link to="/category/samfund" onClick={handleNavClick}>Samfund</Link></li>
          </ul>
        </div>

    </NavStyled>
  );
};

export default Navigation;
