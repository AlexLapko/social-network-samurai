import React from "react";
import { createField } from './../../common/FormsControls/FormsControls'
import { Element } from './../../../hoc/form'
import { reduxForm } from "redux-form";
import classes from './ProfileInfo.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

  const Input = Element("input");
  const Textarea = Element("textarea");

  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => {}}>save</button></div>
      {error && (
        <div className={classes.formSummaryError}>{error}</div>
      )}
      <div>
        <b>Full name:</b> {createField('Full name', [], Input, 'fullName')}
      </div>

      <div>
        <b>Looking for a job:</b> {createField('', [], Input, 'lookingForAJob', {type: 'checkbox'})}
      </div>
      <div>
        <b>My professional skills:</b>
        {createField('My professional skills', [], Textarea, 'lookingForAJobDescription')}
      </div>
      <div>
        <b>About me:</b>
        {createField('About me', [], Textarea, 'aboutMe')}
      </div>

      <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={classes.contact}><b>{key}:</b> {createField(key, [], Input, 'contacts.' + key)} </div>
        })}
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataReduxForm;
