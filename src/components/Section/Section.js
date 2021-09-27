import PropTypes from 'prop-types';
import styles from'./Section.module.scss';

const Section =(props)=>{
    return(
        <div className={styles.Section}>
            {props.children}
        </div>
    )
}

Section.propTypes = {
    children: PropTypes.array.isRequired,
}
export default Section