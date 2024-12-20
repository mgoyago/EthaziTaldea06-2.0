import { useState } from 'react';
import './Menua.css';

import hasiera from "../assets/img/icons/Etxea-removebg-preview.png";
import torneoa from "../assets/img/icons/trofeo_invertido-removebg-preview.png";
import jokoak from "../assets/img/icons/consola.png";
import news from "../assets/img/icons/inverted_world_news_icon-removebg-preview.png";
import apustua from "../assets/img/icons/descarga-removebg-preview (1).png";
import guri from "../assets/img/icons/inverted_user_icon-removebg-preview.png";

interface MenuaProps {
    setCurrentSection: (section: string) => void;
    currentLanguage: string;
  }


function Menua({ setCurrentSection, currentLanguage}: MenuaProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    let language= [""];
    if(currentLanguage==="eus"){
        language= ["Hasiera","Torneoak","Jokoak","Berriak","Apustuak","Guri Buruz"];
    }else if(currentLanguage==="es"){
        language= ["Inicio","Torneos","Juegos","Noticias","Apuestas","Sobre Nosotros"];
    }else if(currentLanguage==="eng"){
        language= ["Home","Tournaments","Games","News","Bets","About Us"];
    }
    return (
        <div className="container-fluid">
            <button 
                className="btn custom-btn btn-outline-light" 
                onClick={toggleMenu}
            >
                {isOpen ? '' : '☰'}
            </button>

            <div className="row">
                <nav className={`col-12 navbar navbar-expand-lg navbar-light bg-black vh-100 align-items-start col-sm-2 ${isOpen ? 'open' : 'closed'} custom-border`}>
                    <button 
                        className="btn toggle-btn btn-outline-light" 
                        onClick={toggleMenu}
                    >
                        X
                    </button>
                    <div className="d-flex flex-column align-items-start w-100">
                        <a className="navbar-brand text-white text-decoration-none mb-5 ms-2" href="#" style={{width: "95%",fontSize: "50px", fontWeight: "bold",borderBottom: "1px solid white"}}>VeEX</a>

                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("home")}>
                                    <img src={hasiera} style={{height: "40px"}}/>
                                    <a className="nav-link active text-white" aria-current="page" href="#">{language[0]}</a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2">
                                    <img src={torneoa} style={{height: "40px"}}/>
                                    <a className="nav-link text-white" href="#">{language[1]}</a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2">
                                    <img src={jokoak} style={{height: "40px"}}/>
                                    <a className="nav-link text-white" href="#">{language[2]}</a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2">
                                    <img src={news} style={{height: "40px"}}/>
                                    <a className="nav-link text-white" href="#">{language[3]}</a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2">
                                    <img src={apustua} style={{height: "40px"}}/>
                                    <a className="nav-link text-white" href="#">{language[4]}</a>
                                </li>
                                <li className="nav-item d-flex mb-4" style={{marginLeft: "-2px"}}  onClick={() => setCurrentSection("form")}>
                                    <img src={guri} style={{height: "30px", marginRight: "-6px"}}/>
                                    <a className="nav-link text-white" href="#">{language[5]}</a>
                                </li>
                                {/*<li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    </ul>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menua;