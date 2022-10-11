import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getCookie } from "../cookie";
import axios from "axios";

function File(props){

    return (
        <div onClick={()=>{props.trigger(props.id)}} className="bg-white p-2 rounded-lg hover:bg-gray-600 hover:scale-110 duration-150 " >
            {props.name}
        </div>)

}

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editorState : EditorState.createEmpty(),
            files : [],
            currentFile : null
        };

    }

    componentDidMount() {
        console.log(JSON.parse(getCookie("session")).email)
        axios.post("/getFiles/",{"email":JSON.parse(getCookie("session")).email}).then(r=>{
            this.setState({files:(r.data)})
        });
    }

    getFiles(){
        let files = []
        for(let i = 0;i<this.state.files.length;i++){
            files.push(<File trigger={(e)=>{
                this.setState({currentFile:i})
                if(this.state.files[i].data!=""){
                    this.setState({editorState : this.state.files[i].data})
                }   
                else{
                    this.setState({editorState : EditorState.createEmpty()})
                }         
            }
            } name={this.state.files[i].name} />)
        }
        return files;
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
        if(this.state.currentFile != null){
            let file = this.state.files;
            file[this.state.currentFile].data = editorState;

            axios.post("/updateData/",{file:file}).then(r=>{
                
            })

            this.setState({files:file})
        }
    };
    render() {
        const { editorState } = this.state;


        return (
           <div className="bg-[#363636] flex flex-row gap-2 h-screen p-5" >
            <div className="w-1/6  flex flex-col gap-2" >
                
                <div onClick={()=>{
                    axios.post("/createFile/",{
                        name:"file1.txt",
                        id:"id",
                        email:JSON.parse(getCookie("session")).email
                    }).then(r=>{})
                }} className="flex flex-row w-full justify-evenly">
                    <div className=" cursor-pointer hover:scale-105 bg-white h-12 w-full hover:bg-gray-500 p-2 justify-center rounded-md flex flex-col text-center duration-100" >
                        New file
                    </div>
                </div>

                {this.getFiles()}
            </div>
            <div className="w-full bg-[#232323]" >
            <Editor
                editorState={editorState}
                toolbarClassName="bg-gray-200"
                wrapperClassName="wrapperClassName"
                editorClassName="text-white"
                onEditorStateChange={this.onEditorStateChange}
                />;
            </div>

           </div>
        );
    }
}

export default Home;
