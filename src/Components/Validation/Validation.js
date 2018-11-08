import React from 'react';

const validation = props => {
    let validationMessage = `Text Too Long`;

    if(props.length <= 5) {
        validationMessage = `Text Too Short`;
    }
    
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation;