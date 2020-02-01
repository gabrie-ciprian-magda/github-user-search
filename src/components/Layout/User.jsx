import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from './Spinner';
import Repos from './Repos';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

function User({ match }) {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
        // eslint-disable-next-line
    }, []);

    if(loading) {
        return (<Spinner />)
    }
    else {
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to search results</Link>
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={user.avatar_url} alt={user.login} className='round-img' style={{ width: 120 }} />
                        <h1>{user.name}</h1>
                        <p>Location: {user.location}</p>
                        <div>
                            Hierable: {' '}
                            {user.hierable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
                        </div>
                    </div>
                    <div>
                        {user.bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{user.bio}</p>
                            </Fragment>
                        )}
                        <a href={user.html_url} className='btn btn-dark my-1'>Visit github profile</a>
                        <ul>
                            <li>
                                Username: <strong>{user.login}</strong>
                            </li>
                            {user.company && (
                                <li>Company: <strong>{user.company}</strong></li>
                            )}
                            {user.blog && (
                                <li>Website: <strong>{user.blog}</strong></li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='card text-center'>
                    <span className="badge badge-success">Followers: {user.followers}</span>
                    <span className="badge badge-dark">Following: {user.following}</span>
                    <span className="badge badge-primary">Public repos: {user.public_repos}</span>
                    <span className="badge badge-primary">Public gitst: {user.public_gists}</span>
                </div>
                <div>
                    <Repos repos={repos} />
                </div>
            </Fragment>
        )
    }
}

export default User;
