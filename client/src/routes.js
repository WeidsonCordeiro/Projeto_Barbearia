//Components
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

//Pages
import Agendamentos  from './pages/Agendamentos'
import Clientes  from './pages/Clientes'

//Css
import './styles.css'

const Routes = () => {
    return (
        <>
            <Header/>
            <div className="container-fluid h100">
                <div className="row h-100">
                    <BrowserRouter>
                        <Sidebar/>      
                        <Router>
                            <Route path="/" element={<Agendamentos />} />
                            <Route path="/clientes" element={<Clientes />} />
                        </Router>
                    </BrowserRouter>
                </div>
            </div>
        </>
    );
}

export default Routes