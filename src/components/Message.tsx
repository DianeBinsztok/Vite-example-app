import { ReactNode } from "react";

interface Props{
    children:ReactNode;
}

// Juste un composant qui affiche du texte
function Message({children}:Props) {  
    return (
        <div>
            {children}
        </div>
    );
}
export default Message;