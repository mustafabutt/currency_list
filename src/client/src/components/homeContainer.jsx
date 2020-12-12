import { HomeComp } from './homeComp';
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {getItemsList} from '../actions/actions'

const mapStateToProps = (state) =>

  ({
    Data:state
  })

const mapDispatchToProps = dispatch =>
  ({
      getItemsListData() {
      dispatch(
          getItemsList()
      )
    }
  });
export  const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeComp))





