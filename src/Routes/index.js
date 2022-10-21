import { Switch } from "react-router-dom";
import Route from './routes';
import Home from '../pages/home';
import Noivas from '../pages/noivas';
import Contato from '../pages/contato';
import Curso from '../pages/curso';
import Sobre from '../pages/sobre';
import SignIn from '../pages/signIn';
import Admin from '../pages/admin';
import Contrato from "../pages/contrato";
import Producoes from "../pages/producoes/producoes";
import Iniciante from "../pages/modulos/Iniciante";
import Avancado from "../pages/modulos/avancado";
import CursoNoivas from "../pages/modulos/noivas";
import Especializacao from "../pages/modulos/especializacao";
import Dupla from "../pages/modulos/dupla";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/noivas" component={Noivas}/>
            <Route exact path="/Producoes" component={Producoes}/>
            <Route exact path="/contato" component={Contato}/>
            <Route exact path="/curso" component={Curso}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/contrato" component={Contrato}/>
            <Route exact path="/iniciante" component={Iniciante}/>
            <Route exact path="/avancado" component={Avancado}/>
            <Route exact path="/cursonoivas" component={CursoNoivas}/>
            <Route exact path="/especializacao" component={Especializacao}/>
            <Route exact path="/dupla" component={Dupla}/>
            <Route exact path="/admin" component={Admin} isPrivate/>
        </Switch>
    )
}