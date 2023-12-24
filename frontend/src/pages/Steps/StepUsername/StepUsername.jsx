import React from 'react'

const StepUsername = ({ onNext }) => {
    return (
        <div>
            <h3>step UserName</h3>

            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepUsername
