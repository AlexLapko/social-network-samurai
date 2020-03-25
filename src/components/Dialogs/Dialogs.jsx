import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { Element } from './../../hoc/form';
import {required, maxLengthCreator} from './../../utils/validators/validators'

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)
  // let newMessageText = props.newMessageText

  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageText);
  }

	return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div>
          { dialogsElements }
        </div>
      </div>

      <div className={classes.messages}>
        { messagesElements }
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
      
    </div>
  );
}

const maxLength50 = maxLengthCreator(50)
const Textarea = Element("textarea");

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength50]} name='newMessageText' placeholder='Enter your message'/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;