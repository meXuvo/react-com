import React, {Component} from "react";
import "./Title.css";


class Title extends Component{

    constructor(props) {
        super(props);

         this.state ={
             title : "this is dummy title",
             isIntput : false
         }
    }
    editHandle(){
        this.setState({
            ...this.state,
            isInput:true

        })
    }
    inputChange(event){
        this.setState({
            ...this.state,
            title : event.target.value

        })
    }
    keyPress(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false


            })

        }
    }

    changeFocus(event){
        this.setState({
            ...this.state,
            isInput:false
        })
    }
    render() {
           let output = null;
           if(this.state.isInput){
               output = (
                   <div className="title">
                       <input
                           className="form-control"
                           type="text"
                           onBlur={(event) => this.changeFocus(event)}
                           onChange={(event) => this.inputChange(event)}
                           onKeyPress={(event)=>this.keyPress(event)}
                           value={this.state.title}


                       />

                   </div>
               )

           }else{
               output = (
                       <div className="justify-content-center">
                           <div className="d-flex title ">
                               <h1 className="display-4">{this.state.title}</h1>
                               <span onClick={(event) => this.editHandle()} className="edit-icon ml-4 mt-2">
                                   <i className="fas fa-pencil-alt"></i>
                               </span>
                           </div>
                       </div>
               )
           }
           return(
               <div>
                   {output}
               </div>
           )
    }
}

export default  Title;