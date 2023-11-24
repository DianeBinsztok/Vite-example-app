/* I - Je range tous les types dans mon interface de Props*/
interface Props{
    title:string; 
    company:string; 
    city:string; 
    contract:string;
    status:string;
    heading:string;
    onSelect:(message:string)=>void;
}

/* II - Je met toutes les propriétés définies en paramètre, dans un objet de Props déstructuré */
function Application({title, company, city, contract, status, heading, onSelect}:Props){
    
    return(
        <li 
        /* III - J'utilise les props dans le composant' */
        onClick={()=>onSelect(heading)}
        style={{display:"flex", justifyContent:"space-between"}}>
            <h2>{heading}</h2>
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