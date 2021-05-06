import React from 'react';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { GoogleLogin } from 'react-google-login';
import profile from './dashboard.js'
import { Redirect } from 'react-router';
//npm install react-google-login

const clientId = "941585629045-mobdgof6i2pcnev1gcdjle0g5kub7ih8.apps.googleusercontent.com"
var currentName = "";
var currentImageURL = "";
function login() {
  const onSuccess = (res) => {
    console.log('[Login Success currentUser:', res.profileObj);
    localStorage.name = res.profileObj.name;
    document.location.href="/profile";
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };
  
  return (
    <div class='googleOAuth'>
        <h1>Welcome to EvalPro</h1>
      <GoogleLogin
      clientId = { clientId }
      buttonText = "Login With Google Oauth"
      onSuccess = { onSuccess }
      onFailure = { onFailure }
      cookiePolicy = { 'single_host_origin' }
      />
    </div>
  );
}

export default login;

