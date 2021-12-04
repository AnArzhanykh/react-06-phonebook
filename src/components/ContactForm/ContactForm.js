
import React, {Component} from 'react';
import styles from './ContactForm.module.scss';
import {connect} from "react-redux";
import *as actions from '../../redux/items/items-action'

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

    simpleValue(e){
        
    }

    cleanInput(){
        this.setState({name: '', number: ''});
    }

       
    render(){
    const {name, number} = this.state;
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

            <button className={styles.ContactForm__button} type="submit"  onClick={() => this.props.addItems(name, number, this.cleanInput())}>
            Add contact
            </button>
        </div>
    )
    }

}



const mapDispatchToProps = dispatch =>({
    addItems: (name, number) => dispatch(actions.addItems(name, number))
})

export default connect(null, mapDispatchToProps)(ContactForm)