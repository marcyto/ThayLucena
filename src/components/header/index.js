
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import {AiOutlineClose, AiOutlineMenu, AiOutlineInstagram } from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {TiSocialPinterest} from 'react-icons/ti';
import {GrFacebookOption} from 'react-icons/gr';




export default function Header(){

    
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const toggleMenu = () => {

        active === 'nav__menu' 
        ? setActive('nav__menu nav__active')
        : setActive('nav__menu');

        toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon('nav__toggler');

    }

    return(

        <nav className='nav'>
            <div className='logoHeader'>
                <Link to="/" className='nav__brand'><img src={logo}></img></Link>   
            </div>
                      
            <ul className={active}>
                <li><Link to="/curso">Cursos</Link></li>
                <li><Link to="/noivas">Noivas</Link></li>
                <li><Link to="/producoes">Produções Sociais</Link></li>
                <a className="linkWhats" href="https://wa.me/message/JAF2C2YLLJEWG1">Fale Comigo <BsWhatsapp color="#FFF" size={25}/></a>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/thaylucenapenteados/'><AiOutlineInstagram className='inst' color='#FFF' size={30}/></a>
                    <a href='https://br.pinterest.com/thaysaalves/'><TiSocialPinterest className='pint' color='#FFF' size={30}/></a>
                    <a href='https://www.facebook.com/thaylucenapenteado/'><GrFacebookOption className='face' color='#FFF' size={30}/></a>
                    
                    
                    

                </div>
                
            </ul> 
            
            <div onClick={toggleMenu} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>   

        </nav>

        
        
    )
}