import React, { useState } from 'react'
import styles from "./Login.module.css"
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTP from '../Steps/StepOPT/StepOTP'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP
}
const Login = () => {
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

export default Login
