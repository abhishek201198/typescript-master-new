import React from "react";
import {useCounter} from "../provider/Counter"

interface  myButtonProps{
    text: string | number | boolean;
    onClick?:()=> void;
    something?: boolean;
}
 

const MyButton: React.FC<myButtonProps> = (props) =>{
    
const context = useCounter()
 return(
    <div>
     <h1 onClick={() => context?.setCount(context?.value + 1)}>{context?.value}</h1>

    </div>
    
 )
};


export default MyButton;