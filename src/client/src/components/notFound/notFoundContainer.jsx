import { NotFoundComp  } from './notFoundComp';
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'

const mapStateToProps = (state) =>
    ({

    })

const mapDispatchToProps = dispatch =>
    ({

    });
export  const NotFoundComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(NotFoundComp))





