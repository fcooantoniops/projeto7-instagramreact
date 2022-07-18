import Header from './Header';
import Stories from "./Stories";
import Publicacoes from "./Publicacoes";
import BarraLateral from './BarraLateral';

export default function App(){
    return(
        <div>
            <Header />
            <main>
                <div className="container-publi-stories">
                    <Stories />
                    <Publicacoes />
                </div>
                <BarraLateral />
            </main>
        </div>
    );
}