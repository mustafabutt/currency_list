
import {Component} from "react";

export class NotFoundComp extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.history.push('/');
    }

    render(){

        return(
            <div className=" row "></div>
        );
    }
}

