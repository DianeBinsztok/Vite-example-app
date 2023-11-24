import "../styles/buttons.css";

interface Props{
    children:string
    color?:string;
}

function Button({children, color}:Props){

    return(
        <button className={"btn btn-"+color}>
            {children}
        </button>

    );
}
export default Button;