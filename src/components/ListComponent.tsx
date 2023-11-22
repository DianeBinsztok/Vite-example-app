function ListComponent(){
    let items = ["Pomme","Poire","Mangue","Framboise","Banane"];
    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}
                onClick={(event)=>console.log(event)
                /*renverra SyntheticBaseEvent => c'est une classe React qui encapsule l'objet event du navigateur. Elle permet d'assurer le même comportement de tous les navigateurs*/
                }
            >
                {index} - {item}
            </li>)}
        </ul>

    );
}
export default ListComponent;