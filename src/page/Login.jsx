import React from 'react'
import { useNavigate } from 'react-router';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="logInCard" >
      <form action="" onSubmit={(event) => loginUser(event)}>
        <h2 className="LInCd">I D</h2>
        <div className="LInCd">
          <input
            type="email"
          // onChange={(event) => handleInputChange("email", event)}
          // value={loginInput.email}
          />
        </div>
        <h2 className="LInCd">Password</h2>
        <div className="LInCd">

          <input
            type="password"
          // onChange={(event) => handleInputChange("password", event)}
          // value={loginInput.password}
          />
        </div>
        <button className="LInCd" type='submit'>로그인</button>
      </form>

    </div>

  )
}

export default Login
