import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Welcome To Box-Office</h2>
      <form>
       <label>
        <p>Username</p>
        <input type="text"/>
       </label>
       <label>
        <p>password</p>
        <input type="password"/>
       </label>
      </form>
       <button type='submit'>Login</button>
       <button type='submit'>Signup</button>
    </div>
  );
};

export default Login;
