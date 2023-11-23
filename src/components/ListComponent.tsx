import { useState } from 'react';
import '../styles/listComponent.css';

interface Props{
    items:string[];
    onSelectItem:(item:string)=>void
}

function ListComponent({items, onSelectItem}:Props){
    const [selectedIndex, setSelectedIndex] = useState(-1);

    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map((item, index) => 
            <li key={index}
            className={selectedIndex === index ? "active" : ""}
            onClick={
                ()=>{
                    setSelectedIndex(index);
                    onSelectItem(item)
                }
            }
            >
                {index} - {item}
            </li>)}
        </ul>

    );
}
export default ListComponent;