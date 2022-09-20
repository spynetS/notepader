import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    
    }

    componentDidMount() {
    
    }

    onEditorStateChange(e){
        console.log(e)
    }

    render() {
        return (
           <div className="flex flex-row gap-2 h-screen" >
            <div className="w-1/6    bg-green-200" >

            </div>
            <div className="w-full" >
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                />; 
            </div>
           
           </div>
        );
    }
}

export default Home;