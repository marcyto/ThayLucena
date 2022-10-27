import Footer from "../../../components/footer";
import Header from "../../../components/header";
import './cursonoivas.css';
import {AiOutlineClockCircle, AiOutlineCheck} from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import {BsHouseDoorFill, BsFillPersonCheckFill} from 'react-icons/bs';
import cardAvancado from '../../../assets/cards/cardAvancado.webp';
import cardIniciante from '../../../assets/cards/cardIniciante.webp';
import cardNoivas from '../../../assets/cards/cardNoivas.webp';
import { useEffect } from "react";



export default function CursoNoivas(){
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Header/>
            <div className="cursoNoivasArea">
                <div className="txtAreaNoivas">
                    
                    <h2>Curso de Especialização em Noivas</h2>
                    <p>
                    Específico para atendimento de noivas,
                    o aluno escolhe as técnicas a aprender.
                    Com adicional de 1 hora da parte
                    teórica como contratos, captação,
                    cronograma, colocação de véu, fixação
                    de grinaldas e tudo o que envolve o
                    atendimento de noivas.
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
                        <img src={cardIniciante}/>
                    </div>
                    
                    <div className="imagesArea">
                        <img src={cardNoivas}/>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}