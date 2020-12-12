import {Component} from "react";
import Select from 'react-select';
import  '../../styles/dropDownStyles.css';

export class DropDownComp extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedOption: null,
      };

    }
    componentDidMount(){}
    componentWillReceiveProps(nextProps){}

    getValue(val) {
      this.setState({ selectedOption:val.label });
    }

    render(){

        const currencyList = [{label: "", value:0}];
        this.props.currenciesList.map((item,i)=>{
            currencyList.push({label:item.name,value:i++})
        })

      return (
        <div >
          <div className="row" >
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select className="sizeClass currencyDropDownStyle"
                options={currencyList}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

      );
    }
}
