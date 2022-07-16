export default function Storie(props){
    return(
        <div className="storie">
            <div className="storie-img">
                <img src={props.urlImage} alt="" />
            </div>
            <span>{props.name}</span>        
        </div>
    );
}