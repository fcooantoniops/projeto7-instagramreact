import React from "react";

export default function Publicacao(props){
    
    const[like, setLike] = React.useState("heart-outline");

    return(
        <div className="publicacao">
            <div className="barra-perfil">
                <div className="perfil-usuario">
                    <img src={props.urlImage} alt=""/>
                    <span>{props.name}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="publicacao-img">
                <img src={props.urlImagePubli} alt="" onDoubleClick={() => { if(like === "heart-outline") setLike("heart") }} />
            </div>
            <div className="publicacao-info">
                <div className="acoes">
                    <div className="acoes-rapidas">
                        <ion-icon name={like} onClick={() => {
                            (like === "heart-outline") ? setLike("heart") : setLike("heart-outline");}}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="publicacao-salvar">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.urlImageLike} alt="" />
                    <div className="texto">
                        Curtido por <strong>{props.likedName}</strong> e <strong>outras {props.likedNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}