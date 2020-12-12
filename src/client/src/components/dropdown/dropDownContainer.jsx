
import { connect }    from 'react-redux'
import {DropDownComp} from "./dropDownComp";

const mapStateToProps = (state) =>
    ({

    })

const mapDispatchToProps = dispatch =>
    ({
        getHackerNewsData() {

        }
    });
export  const DropDownComponent = connect(mapStateToProps, mapDispatchToProps)(DropDownComp)





