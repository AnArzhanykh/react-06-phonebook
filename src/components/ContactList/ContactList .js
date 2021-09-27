import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './ContactList.module.scss'

const ContactList = ({visibleName, onClick}) =>{

    return(
    <ul className={styles.ContactList}>
        {visibleName.map(({name, id, number})=><li className={styles.item}key={id}>{name}:{number} <Button onClick={onClick} id={id}>Delete</Button> </li>)}
    </ul>
    )
}


ContactList.propTypes = {
    visibleName: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,

}

export default ContactList