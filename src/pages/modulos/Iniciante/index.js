import Footer from "../../../components/footer"
import Header from "../../../components/header"
import {AiOutlineClockCircle, AiOutlineCheck} from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import {BsHouseDoorFill} from 'react-icons/bs';
import cardAvancado from '../../../assets/cards/cardAvancado.jpeg';
import cardIniciante from '../../../assets/cards/cardIniciante.jpeg';
import cardNoivas from '../../../assets/cards/cardNoivas.jpeg';
import '../noivas/cursonoivas.css';

export default function Iniciante(){
    return(
        <div>
            <Header/>
            <div className="cursoNoivasArea">
                <div className="txtAreaNoivas">
                    
                    <h2>Curso de Iniciante</h2>
                    <p>
                    Ideal para quem precisa começar da base,
                    desde a preparação, tipos de tranças e
                    penteados essenciais para atendimento: semi
                    preso, rabo de cavalo, coque alto e baixo.
                    O curso será 1 dia em boneca e outro em
                    modelo, estando o valor desta já incluso
                    </p>
                    <p>Para consultar o valor e a data desse curso entre em contato pelo WhatsApp <a href="https://wa.me/message/JAF2C2YLLJEWG1">➡Clique aqui⬅</a></p>
                </div>
                <div className="iconsArea">
                    <div className="icon">
                        <AiOutlineCheck size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Curso 100% Pratico</h3>
                            <p></p>
                        </div>
                        
                    </div>
                    <div className="icon">
                        <AiOutlineClockCircle size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Horario</h3>
                            <p>A combinar</p>
                        </div>
                       
                    </div>
                    <div className="icon">
                        <TbCertificate size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Certificação</h3>
                            <p>Certificado incluso</p>
                        </div>
                        
                    </div>
                    <div className="icon">
                        <BsHouseDoorFill size={40} color="rgb(245, 143, 160)"/>
                        <div className="iconTxt">
                            <h3>Localidade</h3>
                            <p>Studios Lucena, Maceio - AL</p>
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