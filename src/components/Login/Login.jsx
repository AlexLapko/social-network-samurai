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

const LoginForm = (props) => {  
  return (
    <form onSubmit={props.handleSubmit}>
      {createField("Email", [required], Input, "email")}
      {createField("Password", [required], Input, "password", {type: "password"})}
      {createField(null, [], Input, "rememberMe", {type: "checkbox"}, "Remember me")}
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
	
	return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );		
}



const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);