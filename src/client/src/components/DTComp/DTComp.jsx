
import {Component} from "react";
import {ImageComp} from "../imageComp/ImageComp"
import {DropDownComp} from "../dropdown/dropDownComp"
import  '../../styles/DTStyles.css';
import _ from "underscore";


export class DTComp extends Component{
  constructor(props){
    super(props);
    this.state ={
        productsList:undefined,
        currencyList:undefined
    }
  }
  componentWillMount(){
      (this.props).getIpData();
      (this.props).getItemsListData();
      (this.props).getCurrencyListData();
  }
  componentDidMount(){}
  componentWillReceiveProps(nextProps){

      if(!_.isEmpty(nextProps.itemsData)){
        try{
            if(nextProps.itemsData.hasOwnProperty("ip"))
                this.setState({ipAddressData:nextProps.itemsData})

            if(!nextProps.itemsData[0].hasOwnProperty("currencies") && !nextProps.itemsData.hasOwnProperty("ip"))
                this.setState({productsList:nextProps.itemsData});

            if(nextProps.itemsData[0].hasOwnProperty("currencies"))
                this.setState({currencyList:nextProps.itemsData[0].currencies});

        }catch(err){
            console.log(err)
        }

      }

  }

  render(){
    return(

      <div className="container-fluid">
          <table className="table table-responsive tableWidth ">
              <tr className="borderClass tableColor">
                  <th className="borderClass col-xs-1">Title</th>
                  <th className="borderClass col-xs-1">Price</th>
                  <th className="borderClass col-xs-1">Image</th>
              </tr>
          {  this.state.productsList!= undefined ? this.state.productsList.map((item,i)=>

                      <tr className="">
                          <td className=" col-xs-1">{item.name}</td>
                          <td className=" col-xs-1">{item.priceUSD}{this.state.ipAddressData.currency}</td>
                          <td className=" col-xs-1"><ImageComp images={item.photos} /></td>
                      </tr>

          ) : null}
          </table>
          <b className="currencyStatementStyle">Select Your Currency </b>
          {
              this.state.currencyList != undefined ? <DropDownComp  currenciesList={this.state.currencyList} /> :null
          }

      </div>

    );
  }
}
