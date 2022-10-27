import Footer from "../../../components/footer"
import Header from "../../../components/header"
import {AiOutlineClockCircle, AiOutlineCheck} from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import {BsHouseDoorFill, BsFillPersonCheckFill} from 'react-icons/bs';
import cardEspecializacao1 from '../../../assets/cards/cardEspecializacao1.webp';
import cardEspecializacao2 from '../../../assets/cards/cardEspecializacao2.webp';
import cardEspecializacao3 from '../../../assets/cards/cardEspecializacao3.webp';
import { useEffect } from "react";


export default function Especializacao(){
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Header/>
            <div className="cursoNoivasArea">
                <div className="txtAreaNoivas">
                    
                    <h2>Curso de Especialização</h2>
                    <p>
                    Ideal para alunos que já possuem uma boa
                    base de penteados. O aluno escolhe as
                    técnicas que deseja aprender e os pontos de
                    dificuldade no atendimento para explorar no
                    curso.
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
                        <img src={cardEspecializacao1}/>
                    </div>
                    
                    <div className="imagesArea">
                        <img src={cardEspecializacao2}/>
                    </div>
                    
                    <div className="imagesArea">
                        <img src={cardEspecializacao3}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}