import React from "react"
import SignIn from "../../components/signin/signin"
import SignUp from "../../components/signup/signup"

import "./signin-n-signup.scss"

const SignInNSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInNSignUpPage
