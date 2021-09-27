
import  React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from './ContactForm.module.scss'

class ContactForm extends Component {
    
    state = {
        name: '',
        number: ''
    }

    handleName (e) {
        this.setState({name: e.currentTarget.value})
}

    handleNumber(e){
        this.setState({number: e.currentTarget.value})
    }

    cleanInput(){
        this.setState({name: '', number: ''});
    }


    render(){
    const {name, number} = this.state
    const {addContacts}= this.props

    return(
        <div className={styles.ContactForm}>
            <label className={styles.ContactForm__input}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={this.handleName.bind(this)}
                />
            </label>
            <label className={styles.ContactForm__input}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    value={number}
                    required
                    onChange={this.handleNumber.bind(this)}
                />
            </label>

            <button className={styles.ContactForm__button} type="submit"  onClick={()=>addContacts(name, number, this.cleanInput())}>
            Add contact
            </button>
        </div>
    )
    }

}


ContactForm.propTypes = {
    addContacts: PropTypes.func.isRequired,
}
export default ContactForm