import React, { useState, useEffect } from "react";
import logo_do_site from "../../imagens/logos/logo_do_site.webp";
import { FaAngleDown } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const temaSalvo = localStorage.getItem("theme");
        return temaSalvo === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="Header">

            <div className="HeaderDesk">

                <div className="LogoLink">

                    <div className="Logo">
                        <a href="/" aria-label="Ir para página inicial">
                            <figure>
                                {/* <img src={logo_do_site} alt="Logo do Site" loading="lazy" /> */}
                                <figcaption>
                                    <p>Arte Visual</p>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <nav className="Link">
                        <ul>
                            <li> <a href="#Home" aria-label="Ir para página inicial">Home</a> </li>
                            <li> <a href="#Sobre" aria-label="Ir para página sobre">Sobre</a> </li>
                            <li> <a href="#Servicos" aria-label="Ir para página de serviços">Serviços</a> </li>
                            <li> <a href="#Preco" aria-label="Ir para página de preços">Preço</a> </li>
                            <li> <a href="#Portfólio" aria-label="Ir para página de Portfólio">Portfólio</a> </li>
                            <li> <a href="#Contacto" aria-label="Ir para página de contacto">Contacto</a> </li>
                            {/* <li className="VerSubMenuDesk">
                                <a href="#" aria-label="Ver todas páginas">
                                    Páginas
                                    <div className="Icon">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className="SubMenuDesk">
                                    <ul>
                                        <li> <a href="#" aria-label="Ir para página de sobre"> Página de sobre </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de contacto"> Página de contacto </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de grades do blog"> Página de grades do blog </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de barra lateral do blog"> Página de barra lateral do blog </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de detalhes do blog"> Página de detalhes do blog </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de login"> Página de login </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de inscição"> Página de inscição </a> </li>
                                        <li> <a href="#" aria-label="Ir para página de erro 404"> Página de erro 404 </a> </li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>

                    </nav>

                    <div className="Btn">
                        <a href="#" aria-label="Solicitar serviço">Solicitar serviço</a>

                        <button aria-label="Mudar tema" onClick={toggleTheme}>
                            {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                        </button>

                        <button
                            className={`IconMenuMobile ${menuAberto ? "active" : ""}`}
                            onClick={toggleMenu}
                            aria-label="Abrir ou fechar menu"
                        >
                            <span></span>
                            <span className="DoMeio"></span>
                            <span></span>
                        </button>

                    </div>

                </div>

            </div>

            <div className={`HeaderMob ${menuAberto ? "show" : ""}`} id="HeaderMob">

                <nav>

                    <ul>

                        <li> <a href="#Home" aria-label="Ir para página inicial">Home</a> </li>
                        <li> <a href="#Sobre" aria-label="Ir para página sobre">Sobre</a> </li>
                        <li> <a href="#Servicos" aria-label="Ir para página de serviços">Serviços</a> </li>
                        <li> <a href="#Preco" aria-label="Ir para página de preços">Preço</a> </li>
                        <li> <a href="#Portfólio" aria-label="Ir para página de Portfólio">Portfólio</a> </li>
                        <li> <a href="#Contacto" aria-label="Ir para página de contacto">Contacto</a> </li>
                        {/* 
                        <details>

                            <summary aria-label="Ver todas páginas">
                                Páginas <div className="Icon"><FaAngleDown /> </div>
                            </summary>

                            <div className="SubMenuMob">
                                <ul>
                                    <li> <a href="#" aria-label="Ir para página de sobre"> Página de sobre </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de contacto"> Página de contacto </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de grades do blog"> Página de grades do blog </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de barra lateral do blog"> Página de barra lateral do blog </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de detalhes do blog"> Página de detalhes do blog </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de login"> Página de login </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de inscição"> Página de inscição </a> </li>
                                    <li> <a href="#" aria-label="Ir para página de erro 404"> Página de erro 404 </a> </li>
                                </ul>
                            </div>

                        </details> */}

                    </ul>

                    <div className="Btn">
                        <a href="#" aria-label="Solicitar serviço">Solicitar serviço</a>
                    </div>

                </nav>

            </div>

        </header>
    );
}

export default Header;
