export default function Perfil(props){
    return(
        <div className="usuario-adm">
            <img src={props.image} alt=""/>
            <div className="texto-usuario-adm">
                <strong>{props.profileName}</strong>
                <span>{props.nickName}</span>
            </div>
        </div>
    );
}
