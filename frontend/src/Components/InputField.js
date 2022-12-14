import React from "react";



export default class InputField extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value:(this.props.value)?this.props.value:""
        }
    }

    render(){
        return(<div>
            <input value={this.state.value} className={`rounded-full bg-[#494949] p-3 px-5  outline-none text-white text-md ${this.props.className}`} placeholder={(this.props.placeholder)?this.props.placeholder:""} onChange={e=>{try{this.props.value(e.target.value);this.setState({value:e.target.value})}catch(error){this.setState({value:e.target.value})}}} ></input>
        </div>)

    }

}