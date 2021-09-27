import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button =( {onClick, id, children})=>{
    return(
        <button className={styles.Button} onClick={()=>onClick(id)}>{children}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

export default Button;