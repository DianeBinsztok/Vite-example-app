

function ListComponent(){
    let items = [
        {
            id:0,
            name:"Pomme"
        }, 
        {
            id:1,
            name:"Poire"
        }, 
        {
            id:2,
            name:"Mangue"
        }, 
        {
            id:3,
            name:"Framboise"
        }, 
        {
            id:4,
            name:"Banane"
        }, 
        
    ];

items = [];
    
    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>

    );
}
export default ListComponent;