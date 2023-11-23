import Application from "./Application";

/*Pour renseigner un type 'tableau d'objets' en typescript (ici: items), il faut le déstructurer dans les paramètres et typer les propriété de l'objet. Se contenter de la mention 'object[]' ne suffira pas.*/ 
function ApplicationsList({heading, items}:{heading:string, items:{title:string,company:string,city:string,contract:string,status:string,}[]}){

    if(items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <>
            <h2>{heading}</h2>
            <ul>
                {items.map((item, index) => 
                <Application 
                key={index} 
                title = {item.title}
                company = {item.company}
                city = {item.city}
                contract = {item.contract}
                status = {item.status}/>
                )}
            </ul>
        </>
    );
}
export default ApplicationsList;