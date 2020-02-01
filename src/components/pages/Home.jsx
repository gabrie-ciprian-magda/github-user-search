import React, {Fragment} from 'react';
import Users from '../Layout/Users';
import Search from '../Layout/Search';

const Home = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home;
