import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getCookie } from "../cookie";
import axios from "axios";

function File(props){

    return (
        <div className="bg-white p-2 rounded-lg hover:bg-gray-600 hover:scale-110 duration-150 " >
            {props.name}
        </div>)

}

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editorState : EditorState.createEmpty(),
            files : [],
        };

    }

    componentDidMount() {
       
    }

    getFiles(){
        let files = []
        for(let i = 0;i<this.state.files.length;i++){
            files.push(<File name={this.state.files[i]} />)
        }
        return files;
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
        console.log(editorState);
      };
    render() {
        const { editorState } = this.state;


        return (
           <div className="bg-[#363636] flex flex-row gap-2 h-screen p-5" >
            <div className="w-1/6  flex flex-col gap-2" >
                
                <div className="flex flex-row w-full justify-evenly">
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
