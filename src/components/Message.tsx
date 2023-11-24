interface Props{
    children:string;
}

// Juste un composant qui affiche du texte
function Message({children}:Props) {  
    return (
        <p>
            {children}
        </p>
    );
}
export default Message;