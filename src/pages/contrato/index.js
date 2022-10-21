
import { useState } from "react";
import SideBar from "../../components/sideBar";
import logo from '../../assets/logo.png';
import './contrato.css';
import firebase from '../../services/firebaseConnection';
import {toast} from 'react-toastify';

//RESPONSIVO FINALIZADO.

export default function Contrato(){

    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataCasamento, setDataCasamento] = useState('');
    const [local, setLocal] = useState('');
    const [horario, setHorario] = useState('');
    const [localChange, setLocalChange] = useState('');
    const [convidadas, setConvidadas] = useState('');
    const [pacote, setPacote] = useState('');
    

    async function handleSave(e){
        e.preventDefault(e);
        if(nome !== '' && rg !== '' && cpf !== '' && email !== '' && telefone !== '' && endereco !== '' && dataCasamento !== '' && local !== '' && horario !== '' && localChange !== '' && convidadas !== '' && pacote !== ''){
            await firebase.firestore().collection('Noivas')
                .add({
                    nome:nome,
                    rg:rg,
                    cpf:cpf,
                    email:email,
                    telefone:telefone,
                    endereco:endereco,
                    dataCasamento:dataCasamento,
                    local:local,
                    horario:horario,
                    localChange:localChange,
                    convidadas:convidadas,
                    pacote:pacote,
                })
                .then(() => {
                    setNome('');
                    setRg('');
                    setCpf('');
                    setEmail('');
                    setTelefone('');
                    setEndereco('');
                    setDataCasamento('');
                    setLocal('');
                    setHorario('');
                    setLocalChange('');
                    setConvidadas('');
                    setPacote('');
                    toast.success(`Cadastro Realizado com Sucesso!`);
                })
                .catch((error)=>{
                    toast.error('Preencha Corretamente os Campos')
                    console.log(error);
                })
        }else{
            toast.error('Preencha todos os campos corretamente.');
        }
    }

    return(
            <main>
                <section className='glass form'>
                    <div className="img-form">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="form-box">
                        
                        <h1>Formulário de Contrato</h1>
                        <form onSubmit={handleSave} className="form-contrato">
                            <div className="user-box">

                                <input type="text" name="nome" required onChange={(e) => setNome(e.target.value)}/>
                                <label>Nome Completo</label>

                            </div>
                            <div className="user-box">

                                <input type="text" name="rg" required onChange={(e) => setRg(e.target.value)}/>
                                <label>Rg</label>

                            </div>
                            <div className="user-box">

                                <input type="number" name="cpf" required onChange={(e) => setCpf(e.target.value)}/>
                                <label>Cpf</label>

                            </div>
                            <div className="user-box">

                                <input type="text" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                                <label>Email</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="number" name="telefone" required onChange={(e) => setTelefone(e.target.value)}/>
                                <label>Telefone</label>
                            </div>
                            <div className="user-box">
                                 
                                 
                                <input type="text" name="endereco" required onChange={(e) => setEndereco(e.target.value)}/>
                                <label>Endereço</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="date" name="data" required onChange={(e) => setDataCasamento(e.target.value)}/>
                                <label>Data do Casamento</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="text" name="local" required onChange={(e) => setLocal(e.target.value)}/>
                                <label>Local</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="text" name="horario" required onChange={(e) => setHorario(e.target.value)}/>
                                <label>Horario</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="text" name="localAtendimento" required onChange={(e) => setLocalChange(e.target.value)}/>
                                <label>Local de Atendimento</label>

                            </div>
                            <div className="user-box">
                                
                                <input type="number"  name="convidadas" required onChange={(e) => setConvidadas(e.target.value)}/>
                                <label>Irão se produzir com você (Nº)</label>

                            </div>
                            
                            
                            <div className="pacote">
                                <h3>Pacote:</h3>
                                <div>
                                    <input type="radio" name="radio" value="silver" onChange={(e) => setPacote(e.target.value)}/>
                                    <label>Silver</label>
                                </div>
                                <div>
                                    <input type="radio" name="radio" value="bronze" onChange={(e) => setPacote(e.target.value)}/>
                                    <label>Bronze</label>
                                </div>
                                

                                

                            </div>  

                            <button type="submit"><span>Cadastrar</span></button>        
                                            
                        </form>

                    </div>

                </section>
                <div className='circle1'></div>
                <div className='circle2'></div>

            </main>
        
    )
}











