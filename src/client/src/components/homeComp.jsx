
import {Component} from "react";
import {DTComponent} from './DTComp/DTContainer'
import  '../styles/homeStyles.css';

export class HomeComp extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){}
  componentWillReceiveProps(nextProps){}

  render(){

    return(
      <div>
          <h1 className="marginL">Products Lists</h1>
          <DTComponent />
      </div>
    );
  }
}
