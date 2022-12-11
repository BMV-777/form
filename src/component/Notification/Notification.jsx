import PropTypes from 'prop-types';
import styles from '../Widget/Widget.modul.css';



const Notification = ({ message }) => {
  return <p className={styles.prevDesc}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
