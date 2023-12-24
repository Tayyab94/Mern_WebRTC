import React, { useEffect, useState } from 'react'
import styles from "./Register.module.css"
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepName from '../Steps/StepName/StepName'
import StepOTP from '../Steps/StepOPT/StepOTP'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUsername from '../Steps/StepUsername/StepUsername'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}


const Register = () => {
    const [step, setStep] = useState(1);
    const ComponentNumnber = steps[step];

    const onNext = () => {

        let nextStep = step + 1;

        if (nextStep > 5) {
            nextStep = 1;
        }

        setStep(nextStep);
    }


    return (
        <>
            <ComponentNumnber onNext={onNext} />
        </>
    )
}

export default Register
