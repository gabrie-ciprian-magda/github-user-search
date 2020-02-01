import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

function Search() {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const [text, setText] = useState('');

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter something', 'light');
        }
        else {           
            githubContext.searchUser(text);
            setText('');
        }
    }

    return (
        <div>
           <form onSubmit={onSubmit} className="form">
               <input type="text" name="text" placeholder="search users" onChange={onChange} value={text} />
               <input type="submit" value="Search" className="btn-dark btn-block" />
            </form>
            {
                githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
            }
        </div>
    )
}

export default Search;
