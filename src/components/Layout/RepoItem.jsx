import React from 'react';
import propTypes from 'prop-types';

export default function RepoItem({ repo }) {
    return (
        <div className='card'>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: propTypes.object.isRequired
}
