import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './ContactList.module.scss'
import {connect} from "react-redux";


const ContactList = ({items}) =>{

    return(
        <ul className={styles.ContactList}>
            {items.map(({name, id, number})=><li className={styles.item}key={id}>{name}:{number} <Button id={id}>Delete</Button> </li>)}
        </ul>
    )
}


ContactList.propTypes = {
    items: PropTypes.array.isRequired,
    // filter: PropTypes.string.isRequired,

}

const getVisibleItems =(items, filter)=>{
    const normolizedFilter = filter.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(normolizedFilter)
    );
}

const mapStateToProps = ({contacts: {items, filter}}) => ({
    items: getVisibleItems(items, filter)
  }
);



export default connect(mapStateToProps)(ContactList)