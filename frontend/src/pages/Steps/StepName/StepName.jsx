import React from 'react'

const StepName = ({ onNext }) => {
    return (
        <div>
            <h2>Step Name</h2>

            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepName
