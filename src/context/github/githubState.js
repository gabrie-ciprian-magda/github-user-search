import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Search users
    async function searchUser(user) {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    // Get user
    async function getUser(username) {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
      }

    // Get repos
    async function getUserRepos(username) {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    // Clear users
    function clearUsers() {
        dispatch({
            type: CLEAR_USERS
        })
    }

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
    }}>{props.children}</GithubContext.Provider>
}

export default GithubState;