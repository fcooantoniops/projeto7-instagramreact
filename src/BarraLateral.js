import Sugestao from "./Sugestao";

const userProfile = { 
    profileName: "Nina William",
    nickName: "nina_william"
}

const sugestaoData = [
    {
        urlImage: "https://picsum.photos/id/22/32",
        name:"Eddy",
        id: 1
    },
    {
        urlImage: "https://picsum.photos/id/399/32",
        name:"Alex",
        id: 2
    },
    {
        urlImage: "https://picsum.photos/id/342/32",
        name:"Lina",
        id: 3
    },
    {
        urlImage: "https://picsum.photos/id/375/32",
        name:"Eric",
        id: 4
    },
];

export default function BarraLateral(){
    return(
        <div className="barra-lateral">
            <div className="container-lateral">
                <div className="usuario-adm">
                    <img src="https://picsum.photos/id/1027/56"  alt=""/>
                    <div className="texto-usuario-adm">
                        <strong>{userProfile.profileName}</strong>
                        <span>{userProfile.nickName}</span>
                    </div>
                </div>
                <div className="titulo">
                    Sugestões para você
                    <span>Ver tudo</span>
                </div>

                <div className="sugestoes">
                    {sugestaoData.map(data => <Sugestao key={data.id} urlImage={data.urlImage} name={data.name} />)}
                </div>

                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>
                <div className="copyright">
                    © 2022 INSTAGRAMA DO FACEBOOKE
                </div>
            </div>
        </div>
    );
}