import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn =()=>{
        googleSignIn();
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn'>Google SignIn</button>
        </div>
    );
};

export default SocialLogin;