import React from 'react';


const Alert = ({msg, type}) => {
    return (
        <div className={`alert alert-${type}`}>
            {msg}
        </div>
    )
}


export default Alert;