import Footer from "../../components/footer";
import Header from "../../components/header";
import ImageSlider from "../../components/imageSlider";
import './curso.css';
import FotoThay from '../../assets/fotoThay.jpg';
import logo from '../../assets/logo.png'
import cardAvancado from '../../assets/cards/cardAvancado.jpeg';
import cardIniciante from '../../assets/cards/cardIniciante.jpeg';
import cardNoivas from '../../assets/cards/cardNoivas.jpeg';
import cardEspecializacao from '../../assets/cards/cardEspecializacao.jpeg';
import cardDupla from '../../assets/cards/cardDupla.jpeg';
import { Link } from "react-router-dom";

export default function Curso(){
    return(
        <div >
            <Header/>
            <div className="cursoArea">
                <div className="logoArea">
                    <div className="logoThayCursos">
                        <img src={logo}/>
                    </div>
                    <div className="infoThay">
                        <div className="textArea">
                            
                            <h1>Curso Vip</h1>
                            <p>Olá, eu sou Thaysa, mas pode me chamar de Thay.</p>
                            <p>Sou especialista em penteados para noivas e atendimentos sociais.</p>
                            <p>Ministro cursos desde 2019,
                                com mais de 800 alunos
                                presenciais e online. Vou te
                                ensinar as técnicas mais
                                atualizadas do momento e a
                                desenvolver seus pontos
                                fracos para que se torne um
                                profissional confiante e
                                solicitado pelas clientes
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="imgAreas">
                    <img src={FotoThay}/>
                </div>
               
            </div>
            <div className="cursoCards">

                <div className="mod">
                    <div className="cardCurso">
                        <div className="iniciante">
                            <img src={cardIniciante}/>
                        </div>
                    </div>
                    <div className="linkCurso"><Link to="/iniciante">Curso Iniciante</Link></div>
                </div>
                <div className="mod">
                    <div className="cardCurso">
                        <div className="especializacao">
                            <img src={cardEspecializacao}/>                       
                        </div>
                    </div>
                    <div className="linkCurso"><Link to="/especializacao">Curso Especialização</Link></div>
                </div>
                <div className="mod">
                    <div className="cardCurso">
            
                        <div className="avancado">
                            <img src={cardAvancado}/>
                            
                        </div>
                    </div>
                    <div className="linkCurso"><Link to="/avancado">Curso Avançado</Link></div>
                </div>
                <div className="mod">
                    <div className="cardCurso">
                        <div className="noivas">
                            <img src={cardNoivas}/>
                            
                        </div>
                    </div>
                    <div className="linkCurso"><Link to="/cursonoivas">Especialização Noivas</Link></div>
                </div>
                <div className="mod">
                    <div className="cardCurso">
                                        
                        <div className="dupla">
                            <img src={cardDupla}/>                            
                        </div>
                    </div>    
                    <div className="linkCurso"><Link to="/dupla">Curso em Dupla</Link></div>        
                </div>
                                
            </div>
            <Footer/>
        </div>
    )
}