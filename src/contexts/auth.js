import { useState, createContext, useEffect } from "react";
import {toast} from 'react-toastify';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])

    async function signIn(email, password){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value)=> {

            let data = {
                nome: "Thaysa",
                email: value.user.email,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success(`Bem vinda ao sistema Amor de mi vidares <3`);
        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
            toast.error(`Senha ou email errado nega, tente denovo.`)
        })
    }
    async function signOut(){
        await firebase.auth().signOut();
        toast.success("Logout Concluido.");
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }
    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    return(
        <AuthContext.Provider value={{ 
            signed: !!user,
                user,
                loading, 
                signIn, 
                signOut, 
                }}>
            {children}
        </AuthContext.Provider>
    );

}