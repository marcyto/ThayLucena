import Footer from "../../../components/footer"
import Header from "../../../components/header"
import {AiOutlineClockCircle, AiOutlineCheck} from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import {BsHouseDoorFill, BsFillPersonCheckFill} from 'react-icons/bs';
import cardAvancado from '../../../assets/cards/cardAvancado.webp';
import cardAvancado1 from '../../../assets/cards/cardAvancado1.webp';
import cardAvancado2 from '../../../assets/cards/cardAvancado2.webp';
import { useEffect } from "react";

export default function Avancado(){

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Header/>
            <div className="cursoNoivasArea">
                <div className="txtAreaNoivas">
                    
                    <h2>Curso Avançado</h2>
                    <p>
                    Curso ideal para alunos que tem dúvida
                    ou quer aprender um penteado ou
                    técnica específica. O aluno traz a
                    inspiração e as dúvidas para o curso.
                    </p>
                    <p>Para consultar o valor e a data desse curso entre em contato pelo WhatsApp <a href="https://wa.me/message/JAF2C2YLLJEWG1">➡Clique aqui⬅</a></p>
                </div>
                <div className="iconsArea">
                    <div className="icon">
                        <AiOutlineCheck size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Curso 100% prático</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="icon">
                        <BsFillPersonCheckFill size={45} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Técnicas escolhidas pelo próprio aluno.</h3>
                        </div>
                    </div>
                    <div className="icon">
                        <AiOutlineClockCircle size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Horário</h3>
                            <p>A combinar.</p>
                        </div>
                       
                    </div>
                    <div className="icon">
                        <TbCertificate size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Certificação</h3>
                            <p>Certificado incluso.</p>
                        </div>
                        
                    </div>
                    <div className="icon">
                        <BsHouseDoorFill size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Localidade</h3>
                            <p>Studios Lucena, Maceio - AL.</p>
                        </div>
                       
                    </div>

                </div>
                <div className="img_area">
                    <div className="imagesArea">
                        <img src={cardAvancado}/>
                    </div>
                    
                    <div className="imagesArea">
                        <img src={cardAvancado2}/>
                    </div>
                    
                    <div className="imagesArea">
                        <img src={cardAvancado1}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}