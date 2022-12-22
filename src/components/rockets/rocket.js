import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rocketsSlice';
import rocketStyles from './rocket.module.css';

const Rocket = ({
  rocket: {
    id, rocketName, description, flickrImage, reserved,
  },
}) => {
  const dispatch = useDispatch();

  const handleResevation = (id) => {
    if (!reserved) {
      dispatch(reserveRocket(id));
    } else {
      dispatch(cancelReservation(id));
    }
  };
  return (
    <main className={rocketStyles.rocketCard}>
      <img src={flickrImage} className={rocketStyles.img} alt="Rocket" />
      <div className={rocketStyles.details}>
        <h4>{rocketName}</h4>
        <p>
          {(reserved === true) && <span className={rocketStyles.reserved}>Reserved</span>}
          {description}
        </p>
        <button className={!reserved ? rocketStyles.btn : rocketStyles.btnCanceled} type="submit" onClick={() => handleResevation(id)}>Reserve Rocket</button>
      </div>
    </main>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,

};

export default Rocket;
