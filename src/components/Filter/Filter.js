import PropTypes from 'prop-types'
import {connect} from "react-redux";
import *as actions from '../../redux/filter/filter-action'
// import styles from './Filter.module.scss'

const Filter = ({filteredName}) =>{
    return(
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={filteredName}
            />
        </div>
    )
}

Filter.propTypes = {
    filteredName: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>({
    filteredName: (e) => dispatch(actions.filteredName(e.currentTarget.value))
})

export default connect(null, mapDispatchToProps)(Filter)