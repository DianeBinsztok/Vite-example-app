import Application from "./Application";
function ApplicationsList(){
    let applications = [
        {
            title:"Développeur fullstack JS",
            company:"Google",
            city:"Bordeaux",
            contract:"CDI",
            status:"À relancer"
        },
        {
            title:"Développeur React",
            company:"Facebook",
            city:"Bordeaux",
            contract:"CDD",
            status:"En cours"
        },
        {
            title:"Développeur PHP Wordpress",
            company:"Trucmuche",
            city:"Valence",
            contract:"CDI",
            status:"En cours"
        }
    ];
    
    if(applications.length === 0){
        return(<p>La liste est vide pour le moment</p>);
    }
    return(
        <ul>
            {applications.map((application, index) => 
            <Application 
            key={index} 
            title={application.title}
            company = {application.company}
            city = {application.city}
            contract = {application.contract}
            status = {application.status}/>
            )}
        </ul>

    );
}
export default ApplicationsList;