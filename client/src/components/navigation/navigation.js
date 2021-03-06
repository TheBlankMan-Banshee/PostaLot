import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}> {/* position nav at top right corner of page */}
                <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer b">Sign out</p>
            </nav>
        );
    } else {
        return (
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer b">Sign in</p>
                    <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer b">Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;