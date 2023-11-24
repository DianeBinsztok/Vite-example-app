import "../styles/buttons.css";

interface Props{
    text:string;
    color:string;
}

function Button({text, color}:Props){

    return(
        <button className={"btn btn-"+color}>
            {text}
        </button>

    );
}
export default Button;