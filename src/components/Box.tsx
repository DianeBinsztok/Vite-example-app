import { useState } from "react";
import "../styles/boxes.css";

interface Props{
    color?:string | "red" | "orange" | "yellow" | "lime" | "green" | "none";
}
function Box({ color="none"}:Props){
    const [colorValue, setColorValue]= useState(0);
    return(
        <button 
            className={"box box-"+color} 
           onClick={()=>{
            setColorValue((colorValue)=>colorValue + 1)
            console.log(colorValue)
        }}
        >
        </button>

    );
}
export default Box;