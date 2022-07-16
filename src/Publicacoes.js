import Publicacao from "./Publicacao";
import curtidasAleatorias from "./util/CurtidasAleatorias";

const publiData = [
    {
        urlImage: "https://picsum.photos/id/1060/32", 
        name: "Alex", 
        urlImagePubli: "https://picsum.photos/id/1061/612", 
        urlImageLike: "https://picsum.photos/id/1062/20", 
        likedName: "Rafa",
        id: 1
    },
    {
        urlImage: "https://picsum.photos/id/1063/32",
        name: "Nanda",
        urlImagePubli: "https://picsum.photos/id/1064/612",
        urlImageLike: "https://picsum.photos/id/1065/20",
        likedName: "Ana",
        id: 2
    },
    {
        urlImage: "https://picsum.photos/id/1066/32",
        name: "Mia",
        urlImagePubli: "https://picsum.photos/id/1067/612",
        urlImageLike: "https://picsum.photos/id/1062/20",
        likedName: "Diana",
        id: 3
    },
    {
        urlImage: "https://picsum.photos/id/1068/32",
        name: "Ana",
        urlImagePubli: "https://picsum.photos/id/1069/612",
        urlImageLike: "https://picsum.photos/id/1070/20", 
        likedName: "Aurélio",
        id: 4
    }
];

export default function Publicacoes(){
    return(
        <div className="publicacoes">
            {publiData.map(data => <Publicacao key={data.id} urlImage={data.urlImage} name={data.name} urlImagePubli={data.urlImagePubli} urlImageLike={data.urlImageLike} likedName={data.likedName} likedNumber={curtidasAleatorias()} />)}
        </div>
    );
}