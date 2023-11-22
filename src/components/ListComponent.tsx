const items = [
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


function ListComponent(){
    return(
        <ul>
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>

    );
}
export default ListComponent;