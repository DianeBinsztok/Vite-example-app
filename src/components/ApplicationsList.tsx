import Application from "./Application";
/* L'interface Props définira les arguments à donner à l'objet ApplicationsList, et le type de ces arguments'*/
interface Props{
    heading:string
    items:{title:string,company:string,city:string,contract:string,status:string,}[],
}
 
/* La liste aura un paramètre props, de type Props (il implémente l'interface Props)*/
function ApplicationsList(props:Props){

    if(props.items.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <>
            <h2>{props.heading}</h2>
            <ul>
                {props.items.map((item, index) => 
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