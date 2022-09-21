import React from "react";
import { signInWithGoogle } from "../../../firebase/firebase";

interface ISignInWithGoogle {
    buttonLabel?: string | "Sign in with Google";
}

const SignInWithGoogleButton = (props: ISignInWithGoogle) => {
    const { buttonLabel } = props;
    return (
        <button className="google-sign-in-btn" onClick={signInWithGoogle}>
            {buttonLabel}
        </button>
    );
};

export default SignInWithGoogleButton;
