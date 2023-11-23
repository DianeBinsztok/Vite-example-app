function Application({title, company, city, contract, status}:{title:string, company:string, city:string, contract:string, status:string}){
    return(
        <li style={{display:"flex", justifyContent:"space-between"}}>
            <h3>{title}</h3>
            <ul style={{display:"flex" , width: "100%", justifyContent:"space-between"}}>
                <li>{company}</li>
                <li>{city}</li>
                <li>{contract}</li>
                <li>{status}</li>

            </ul>
        </li>

    );
}
export default Application;