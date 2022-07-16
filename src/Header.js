export default function Header(){
    return(
        <header>
            <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="./images/logo.png" alt="logo"/>
            </div>

            <div className="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div className="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

            <div className="header-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./images/logo.png" alt="logo mobile"/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </header>
    );
}