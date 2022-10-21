
import { useEffect, useState } from "react";
import './admin.css';
import SideBar from "../../components/sideBar";
import firebase from '../../services/firebaseConnection';
import { Link } from "react-router-dom";

export default function Admin(){

    const [loadingClient, setLoadingClient] = useState(true);
    const [selectedClient, setSelectedClient] = useState(0);
    const [client, setClient] = useState([]);
    const [idSelected, setIdSelected] = useState('');

    useEffect(()=> {
        
        async function loadClients(){
            await firebase.firestore().collection('Noivas')
            .get()
            .then((snapshot)=> {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nome:doc.data().nome,
                        cpf: doc.data().cpf,
                        rg: doc.data().rg,
                        telefone: doc.data().telefone,
                        email: doc.data().email,
                        endereco: doc.data().endereco,
                        dataCasamento: doc.data().dataCasamento,
                        local: doc.data().local,
                        horario: doc.data().horario,
                        localChange: doc.data().localChange,
                        convidadas: doc.data().convidadas,
                        pacote: doc.data().pacote,
                    })
                })
                if(lista.length === 0){
                    alert("nenhuma empresa cadastrada");
                    setSelectedClient([{id: 1, nome: ''}])
                    setLoadingClient(false);
                    return;
                }
                setClient(lista);
                setLoadingClient(false);
                console.log(client);
            })
            .catch((error)=>{
                alert("Ops... Parece que algo deu errado");
                setLoadingClient(false);
                setSelectedClient([{id:1, nome:''}])
            })
        }
        loadClients();
    }, [])

    function handleChangeClient(e){
        setSelectedClient(e.target.value);
    }


    function GerarPdf(idSelected){
        console.log(idSelected);
        console.log('clicou');
    }

    return(
      
        <main>
            <div className='glass'>
                
                <SideBar />
                <div className="admin">
                    <div className="selectArea">
                        <label>Selecione a Cliente</label>
                        {loadingClient ? (
                            <input type="text" value="Carregando Clientes..." disabled={true}/>
                        ) : (
                            <select value={selectedClient} onChange={handleChangeClient}>
                             {client.map((item, index)=>{
                                return(
                                    <option key={item.id} value={index}>
                                        {item.nome}
                                    </option>
                                )
                                setIdSelected(item.id);
                             })}
                            </select>
                        )}
                    </div>
                    <div className="buttonContract">
                        <Link> Alterar Dados </Link>
                        <button onClick={()=> GerarPdf(idSelected)}>Gerar Contrato</button>
                        
                    </div>
                    
                </div>
               
                
            </div>
            <div className='circle1'></div>
            <div className='circle2'></div>

        </main>
        
    )
}