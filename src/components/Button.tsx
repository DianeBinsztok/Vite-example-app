import "../styles/buttons.css";

interface Props{
    children:string
    /*Avec le ? je rends la prop color optionnelle*/
    color?:string;
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