
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import { getItemsList,getCurrencyList,getIp} from '../../actions/actions'
import {DTComp} from "./DTComp";

const mapStateToProps = (state) =>

  ({
    itemsData:state.data
  })

const mapDispatchToProps = dispatch =>
  ({
      getItemsListData() {
          dispatch(
              getItemsList()
          )
        },
      getCurrencyListData() {
          dispatch(
              getCurrencyList()
          )
      },
      getIpData() {
          dispatch(
              getIp()
          )
      }
  });
export const DTComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(DTComp))





