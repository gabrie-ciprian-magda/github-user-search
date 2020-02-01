import React, {Fragment} from 'react';
import spinner from './spinner.gif';

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="spinner" style={spinnerStyles} />
        </Fragment>
    )
}

const spinnerStyles = {
    width: 200,
    margin: 'auto',
    display: 'block'
}

export default Spinner;