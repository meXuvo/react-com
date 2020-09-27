import React,{Component} from "react";

class Controller extends Component{
    constructor(props) {
        super(props)
        this.state = {
            start : true,
            pause:false,
            lap:true,
            reset:false
        }
    }
    startHandler(){
        this.setState({
            ...this.state,
                start:false,
                pause:true,
                lap:true
        })
        this.props.start();
    }
    pauseHandler(){
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pause()
    }
    lapHandler(){
        this.props.lap();

    }
    resetHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:false,
        })
        this.props.reset()
    }

    getController(){
        let output  = null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button className="btn btn-lg btn-success ml-5 my-5 px-5"
                            onClick={event => this.startHandler()}
                    >start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button className="btn btn-lg btn-primary ml-5 my-5 px-5 "
                            onClick={event => this.pauseHandler()}

                    >pause</button>
                    <button className="btn btn-lg btn-warning ml-5 my-5 px-5 "
                            onClick={event => this.lapHandler()}
                    > lap </button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button className="btn-lg btn btn-success ml-5 my-5 px-5"
                            onClick={event => this.startHandler()}
                    >start</button>
                    <button className="btn-lg btn-danger ml-5 my-5 px-5"
                            onClick={event => this.resetHandler()}
                    >reset</button>
                </div>
            )
        }
        return output;
    }
    render() {
        return this.getController();
    }
}
export default Controller