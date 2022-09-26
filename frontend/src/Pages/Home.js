import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editorState : EditorState.createEmpty()
        };
    
    }

    componentDidMount() {
    
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
           <div className="flex flex-row gap-2 h-screen" >
            <div className="w-1/6 bg-[#363636]" >

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