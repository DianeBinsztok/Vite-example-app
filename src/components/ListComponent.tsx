import { useState } from 'react';
import '../styles/listComponent.css';

function ListComponent(){
    let items = ["Pomme","Poire","Mangue","Framboise","Banane"];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}
            className={selectedIndex === index ? "active" : ""}
            onClick={()=>{setSelectedIndex(index)}}
            >
                {index} - {item}
            </li>)}
        </ul>

    );
}
export default ListComponent;