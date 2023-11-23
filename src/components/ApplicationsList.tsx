import Application from "./Application";
function ApplicationsList(){
    let applications = [
        {
            title:"Testeur de matelas",
            company:"LaBoite",
            city:"Okinawa",
            contract:"CDI",
            status:"À relancer"
        },
        {
            title:"Goûteur de desserts",
            company:"TheCompany",
            city:"Bordeaux",
            contract:"CDD",
            status:"En cours"
        },
        {
            title:"Câlineur de chiots",
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
        <>
            <h2>Liste des candidatures en cours:</h2>
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
        </>
    );
}
export default ApplicationsList;