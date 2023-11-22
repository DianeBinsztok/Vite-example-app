import { MouseEvent } from "react";

function ListComponent(){
    let items = ["Pomme","Poire","Mangue","Framboise","Banane"];

    /* TypeScript impose la mention du type des variables.
    On peut trouver ce type en survolant le param e, dans la partie en TSX
    Ici, il s'agit d'un objet React: MouseEvent. 
    Il faut donc importer cet objet pour pouvoir l'utiliser comme type*/
    function handleClickEvent(event : MouseEvent){
        console.log(event);
    }
    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}
            //pas besoin d'appeler la fonction quand on la mentionne, avec les parenthèses: handleClickEvent()
                onClick={handleClickEvent}
            >
                {index} - {item}
            </li>)}
        </ul>

    );
}
export default ListComponent;