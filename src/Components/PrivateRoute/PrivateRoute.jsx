import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import DoorDashFavorite from '../CustomLoader/DoorDashLoader';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { loggedUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="max-w-laptop mx-auto flex justify-center">
        <DoorDashFavorite></DoorDashFavorite>
      </div>
    );
  if (loggedUser) return children;

  return (
    <Navigate
      state={location?.pathname}
      to="/login"
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
