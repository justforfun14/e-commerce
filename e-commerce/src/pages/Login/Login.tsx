import "./Login.scss";
import { TextField } from "@mui/material";

export const Login = (): JSX.Element => {
  return (
    <div className="login-wrapper">
      <div className="login login__wrapper">
        <div className="login__title">SIGN IN</div>
        <form className="login__form">
          <TextField
            className="login__input"
            id="login__username"
            label="Username"
            variant="outlined"
          />
          <TextField
            className="login__input"
            id="login__password"
            label="Password"
            variant="outlined"
          />
          <button className="login__button">LOG IN</button>
          <a className="login__link" href="#">
            DO NOT REMEMBER THE PASSWORD?
          </a>
          <a className="login__link" href="#">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};
