import Application from "./Application";
/* L'interface Props définira les arguments à donner à l'objet ApplicationsList, et le type de ces arguments'*/
interface Props{
    heading:string
    items:{title:string,company:string,city:string,contract:string,status:string,}[],
}
 
/* On peut déstructurer l'objet props en {heading, items}. Ainsi, ses propriété sont directement disponibles 
(sans passer par props.items)*/
function ApplicationsList({heading, items}:Props){

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