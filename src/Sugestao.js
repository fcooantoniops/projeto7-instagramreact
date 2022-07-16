export default function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.urlImage} alt=""/>
                <div className="texto-usuario">
                    <span>{props.name}</span>
                    <p>Segue você</p>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}