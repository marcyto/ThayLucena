
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import AuthProvider from './contexts/auth';


export default function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000}/>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    

  );
}