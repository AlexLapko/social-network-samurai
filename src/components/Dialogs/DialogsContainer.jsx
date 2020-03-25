import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageActionCreator } from './../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessageActionCreator(newMessageText));
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);