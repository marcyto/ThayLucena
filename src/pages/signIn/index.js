
import { useState, useContext } from "react";
import './signin.css';
import { AuthContext } from "../../contexts/auth";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

export default function SignIn(){


    const { signIn, user, signOut } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(email !== '' && password !== ''){
            signIn(email, password);
        }
    }

    return(
        <body>
            <main>
                <section className='glass'>
                    <div className="loginArea">
                        <img src={logo}/>

                        <form onSubmit={handleSubmit}>

                            <input type="email" placeholder="Digite seu Email" onChange={(e) => setEmail(e.target.value)}/>   
                            <input type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)}/>
                            <button type="submit">Entrar</button>
                        </form>                          
                    </div>
                    
                </section>
                <div className='circle1'></div>
                <div className='circle2'></div>
            </main>
            
        </body>
        
    )
}