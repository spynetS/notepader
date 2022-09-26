import React from "react";
import InputField from "../Components/InputField";
import {IoIosArrowForward} from "react-icons/io"
import axios from "axios";

export default class Login extends React.Component
{


    render(){
        return(
        <div className=" bg-[#232323] h-screen w-screen grid grid-cols-2 gap-4   " >
            
            <div className="h-full flex flex-col justify-center items-center p-12 z-10" >
                <div className="bg-[#363636] w-[450px] h-[500px] rounded-2xl shadow-lg flex flex-col items-center pt-12 col-span-1" >
                    <h1 className="text-4xl text-white mb-16" >Login</h1>
                    <div className="h-full flex flex-col items-center w-full gap-10 relative " >
                        <InputField placeholder="email" ></InputField>
                        <InputField placeholder="password" ></InputField>
                        <a className="hover:text-gray-800" href="/signup" >sign up here</a>
                        <div onClick={()=>{
                            axios.post("http://localhost:8000/createfile/").then(r=>{

                            })
                        }} className="flex flex-col items-center justify-center bg-[#24D8C2] w-16 h-16 rounded-full duration-75 absolute -right-5 bottom-8 e cursor-pointer scale-100 hover:scale-110 " >
                            <IoIosArrowForward className="text-white text-5xl" ></IoIosArrowForward>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="text-white text-5xl z-10 flex flex-col items-center justify-center p-16" >
                <div className="h-[500px]" >
                    <p>Take Notes On the Fly</p>
                    <p>Notepader</p>
                </div>
            </div>

            <img className="absolute bottom-0 right-0 z-0"  src="signup.png" ></img>

        </div>)
    }

}