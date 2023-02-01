import React from "react";
import "./header.scss";

const Header = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <a href="#">
                    <img
                        src="src/assets/img/Veterinaria/logo.png"
                        alt="veterinaria logo"
                    />
                </a>
            </div>
            <div className="menu d-none d-md-flex">
                <ul className="main-menu">
                    <li className="list-item">
                        <a className="item">Home</a>
                    </li>
                    <li className="list-item">
                        <a className="item">About</a>
                    </li>
                    <li className="list-item">
                        <a className="item">Service</a>
                    </li>
                    <li className="list-item">
                        <a className="item">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="search">
                <input type="text" class="search__input" placeholder="Search" />
                <button class="search__button">
                    <i class="bi bi-search search__icon"></i>
                </button>
            </div>
        </nav>
    );
};

export default Header;
