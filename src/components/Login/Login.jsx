import React from 'react'
import { reduxForm, Field } from "redux-form";
import {Element} from './../../hoc/form'
import {required} from './../../utils/validators/validators'
import { connect } from 'react-redux';
import { login } from "./../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import { createField } from "./../common/FormsControls/FormsControls";
import classes from './../common/FormsControls/FormsControls.module.css'


const Input = Element("input");

const LoginForm = ({ handleSubmit, captchaUrl, error }) => {  
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", [required], Input, "email")}
      {createField("Password", [required], Input, "password", {type: "password"})}
      {createField(null, [], Input, "rememberMe", {type: "checkbox"}, "Remember me")}

      { captchaUrl && <img src={captchaUrl} /> }
      { captchaUrl && createField("Symbols from image", [required ], Input, "captcha", {}) }

      {error && (
        <div className={classes.formSummaryError}>{error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
	
	return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );		
}



const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);