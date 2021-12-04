import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import {connect} from "react-redux";
import *as actions from '../../redux/items/items-action'

const Button =( {deleteItems, id, children})=>{
    return(
        <button className={styles.Button} onClick={()=>deleteItems(id)}>{children}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    deleteItems: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}
const mapDispatchToProps = dispatch =>({ 
    deleteItems: (id) => dispatch(actions.deleteItems(id))
})

export default connect(null, mapDispatchToProps)(Button);