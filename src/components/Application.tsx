function Application({title, company, city, contract, status}:{title:string, company:string, city:string, contract:string, status:string}){
    return(
        <li>
            <h3>{title}</h3>
            <ul>
                <li>{title}</li>
                <li>{company}</li>
                <li>{city}</li>
                <li>{contract}</li>
                <li>{status}</li>

            </ul>
        </li>

    );
}
export default Application;