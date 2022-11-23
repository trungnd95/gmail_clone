import { Close } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeComposePane } from '../../features/mailSlicer';
import { db } from '../../firebase';
import "./index.css";

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "emails"), {
        ...data, 
        timestamp: Timestamp.now()
      })
      dispatch(closeComposePane());
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <IconButton onClick={() => dispatch(closeComposePane())}>
            <Close className="sendMail__closeBtn" />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            name="to" 
            placeholder="To" 
            type="text" 
            {...register('to', { required: true })}
          />
          { errors.to 
              && errors.to.type === "required" 
                && (<span className="sendMail__error">This field is required</span>)}
          <input 
            name="subject" 
            placeholder="Subject" 
            type="text" 
            {...register('subject', { required: true })}
          />
          { errors.subject 
              && errors.subject.type === "required" 
                && (<span className="sendMail__error">This field is required</span>)}
          <textarea 
            name="message" 
            placeholder="Message..." 
            className="sendMail__message" 
            {...register('message', { required: true })}
          />
          { errors.message 
              && errors.message.type === "required" 
                && (<span className="sendMail__error">This field is required</span>)}
          <div className="sendMail__options">
            <Button 
              className="sendMail__sendBtn"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
    </div>
  )
}

export default SendMail