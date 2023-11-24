import "../styles/buttons.css";

/*J'impose un jeu de valeurs prédéfinies à la prop color*/
interface Props{
    children:string;
    color?:string | "normal" | "warning" | "delete";
}

/*La prop color aura la valeur "normal" par défaut si elle n'est pas réaffectée dans le composant parent*/
function Button({children, color="normal"}:Props){

    return(
        <button className={"btn btn-"+color}>
            {children}
        </button>

    );
}
export default Button;