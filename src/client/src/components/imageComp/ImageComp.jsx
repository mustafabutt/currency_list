
import {Component} from "react";
import _ from "underscore";

export class ImageComp extends Component{
    constructor(props){
        super(props);
        this.state ={
            userLogin:false
        }
    }

    componentDidMount(){}
    componentWillReceiveProps(nextProps){

        if(!_.isEmpty(nextProps.itemsData)){
            try{
                this.setState({userLogin:true});
            }catch(err){
                console.log(err)
            }

        }

    }

    render(){
        return(

            <div className="row">
                {
                    this.props.images.map((item,i)=>

                        <span className="borderClass marginL"><img src={item} width="50px" height="50px" /></span>
                    )
                }

            </div>

        );
    }
}
