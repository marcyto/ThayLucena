import { useEffect, useState } from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import './home.css';
import ImageSlider from "../../components/imageSlider";
import { motion } from "framer-motion";
import Typical from 'react-typical';
import Footer from "../../components/footer";
import ImageSliderCards from "../../components/imageSliderCards";


export default function Home(){

    return(
        <div>
            <Header />
                <section className="sections">
                    <section className="bloco" id="infoCards">
                        <div className="info-text">
                            <h1>Bem vindo(a), Aqui você vai encontrar todas as informações sobre {' '}
                                <Typical
                                className="typical"
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Noivas', 3000,
                                    'Cursos', 3000,
                                    'mim', 3000,
                                    'produções', 3000
                                ]}/>
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum.
                            </p>
                        </div>
                    </section>
                    <section className="bloco" id="textInfo">
                        <div className="img">
                            <div className="imgArea">
                                <ImageSlider />
                            </div>
                        </div>
                    </section>
                </section>
                <section className="cardArea">
                    
                    <h1>Um pouco sobre o que falam sobre mim</h1>
                    <div className="cards">
                        <ImageSliderCards />
                    </div>
                </section>      
            <Footer /> 
        </div>
         
         
    )
}
/*


            */