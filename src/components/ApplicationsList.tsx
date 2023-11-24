import Application from "./Application";

interface Props{
    heading:string;
    items:{title:string,company:string,city:string,contract:string,status:string}[];
}

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
                status = {item.status}
                heading = "test"
                onSelect = {(message:string)=>{console.log(message)}}
                />
                )}
            </ul>
        </>
    );
}
export default ApplicationsList;