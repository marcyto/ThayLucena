import { Link } from "react-router-dom"
import './footer.css';
import logo from '../../assets/logo.png';
import {AiOutlineClose, AiOutlineMenu, AiOutlineInstagram } from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {TiSocialPinterest} from 'react-icons/ti';
import {GrFacebookOption} from 'react-icons/gr';



export default function Footer(){

    
    return(
        <footer className="footer">
            <a className="linkWhats" href="https://wa.me/message/JAF2C2YLLJEWG1">Fale Comigo <BsWhatsapp color="#FFF" size={25}/></a>
            <div className="footerUp">
                <p>Edificio Ocean Tower, sala 003, Maceio-AL - (82) 99608-9000 - Thaylucenapenteados@gmail.com</p>
                
            </div>
            <div className="footerDown">
                <div className="logoFooter">
                    <Link to="/"><img src={logo}/></Link>  
                </div>
                 
                <ul>
                    <li><Link to="/curso">Cursos</Link></li>
                    <li><Link to="/noivas">Noivas</Link></li>
                    <li><Link to="/producoes">Produções Sociais</Link></li>
                    <div className='socialMediaFooter'>
                        <h1>Follow us</h1>
                        <div className="socialLinksFooter">
                            <a href='https://www.instagram.com/thaylucenapenteados/'><AiOutlineInstagram className='inst' color='black' size={30}/></a>
                            <a href='https://br.pinterest.com/thaysaalves/'><TiSocialPinterest className='pint' color='black' size={30}/></a>
                            <a href='https://www.facebook.com/thaylucenapenteado/'><GrFacebookOption className='face' color='black' size={30}/></a>
                        </div>
                        
                    </div>
                </ul> 
            </div>
            <div className="footerCopy">
                <h3><Link to="/signin">©</Link> 2022 - Thaysa Lucena</h3>
                <p>Todos os direitos reservados</p>
                
            </div>
        </footer>
    )
}