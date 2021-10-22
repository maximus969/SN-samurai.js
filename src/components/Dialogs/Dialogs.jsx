import React from 'react'
import { Redirect } from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)

export const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = state.messages
    .map(m => <Message message={m.message} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to='/login' />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea}
            validate={[required, maxLength100]} 
            name={'newMessageBody'} 
            placeholder='Enter your message' />
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)