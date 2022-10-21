import { Link } from "react-router-dom"
import { useContext } from "react"
import {AuthContext} from '../../contexts/auth';
import './sideBar.css';
import logo from '../../assets/logo.png';

export default function SideBar(){

    const {signOut} = useContext(AuthContext);

    return(
        <div className="sideBar">
           
            <ul className="links">
                <li><img src={logo}/></li>
                <li><Link to="/admin">Gerar Contrato</Link></li>
                <li><Link to="/admin">Opções futuras</Link></li>
                <li><Link to="/admin">Opções futuras</Link></li>
                <li><button onClick={signOut}>Sair</button></li>
            </ul>
            
        </div>
    )
}