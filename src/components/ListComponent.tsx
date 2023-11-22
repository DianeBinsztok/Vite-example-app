function ListComponent(){
    let items = ["Pomme","Poire","Mangue","Framboise","Banane"];

    function handleClickEvent(){
        console.log("pouet");
    }
    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}
                onClick={()=>handleClickEvent()}
            >
                {index} - {item}
            </li>)}
        </ul>

    );
}
export default ListComponent;