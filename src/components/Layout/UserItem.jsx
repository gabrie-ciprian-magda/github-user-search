import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user }) {
    return (
        <div className="card text-center">
            <img src={user.avatar_url} alt={user.login} className="round-img" style={{ width: 60 }} />
            <h3>{user.login}</h3>
            <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">More info</Link>
        </div>
    )
};

UserItem.propTypes = {
    user: propTypes.object.isRequired
}
 
export default UserItem;