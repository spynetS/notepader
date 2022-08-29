import React from "react";
import InputField from "../Components/InputField";


export default class Login extends React.Component
{


    render(){
        return(<div className="  p-72 flex flex-col gap-4" >
            <InputField className="shadow-xl" placeholder="udername"  ></InputField>
            <InputField className="shadow-xl" placeholder="udername" ></InputField>
            <InputField className="shadow-xl" placeholder="udername" ></InputField>
            <InputField className="shadow-xl" placeholder="udername" ></InputField>
        </div>)
    }

}