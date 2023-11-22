const items = ["Pomme", "Poire", "Mangue", "Framboise", "Banane"];


function ListComponent(){
    return(
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>

    );
}
export default ListComponent;