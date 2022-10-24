import Footer from "../../components/footer";
import Header from "../../components/header";
import './producoes.css';
import ImageSliderProd from '../../components/imageSliderProd';
import { useEffect } from "react";

export default function Producoes(){

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Header/>
            <div className="producoes_area">
                <div className="imageSlider_producoes">
                    <div className="txt_prod_area">
                        <h1>Produções Sociais</h1>
                        <h3>Realizamos Atendimentos e Produções sociais para todo tipo de evento.</h3>
                        <p><a>➡Clique aqui⬅</a> para solicitar seu orçamento</p>
                    </div>
                    
                    <div className="imageSlider_producoes_area">
                        
                        <ImageSliderProd />
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}