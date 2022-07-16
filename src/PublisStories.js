import Stories from "./Stories";
import Publicacoes from "./Publicacoes";

export default function PublisStories(){
    return(
        <div className="container-publi-stories">
            <Stories />
            <Publicacoes />
        </div>
    );
}