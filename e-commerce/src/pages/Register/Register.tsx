import "./Register.scss";

import { TextField } from "@mui/material";

export const Register = (): JSX.Element => {
  return (
    <div className="register-wrapper">
      <div className="register register__wrapper">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form className="register__form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            className="register__input"
            id="register__first-name"
            label="First name"
            variant="outlined"
          />
          <TextField
            className="register__input"
            id="register__last-name"
            label="Last name"
            variant="outlined"
          />
          <TextField
            className="register__input"
            id="register__e-mail"
            label="E-mail"
            variant="outlined"
          />
          <TextField
            className="register__input"
            id="register__password"
            label="Password"
            variant="outlined"
          />
          <TextField
            className="register__input"
            id="register__password-confirm"
            label="Confirm password"
            variant="outlined"
          />
          <span className="register__agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="register__button">CREATE</button>
        </form>
      </div>
    </div>
  );
};
