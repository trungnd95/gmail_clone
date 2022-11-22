import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MailRow.css';

function MailRow({ id, title, subject, desc, time }) {
  const navigate = useNavigate();
  return (
    <div className="mailRow" onClick={() => navigate("/mail")}>
        <div className="mailRow__options">
          <Checkbox />
          <IconButton><StarBorderOutlined /></IconButton>
          <IconButton><LabelImportantOutlined /></IconButton>
        </div>
        <h3 className="mailRow__title">{title}</h3>
        <div className="mailRow__message">
          <h4>{subject}{' - '}<span className='mailRow__messageDesc'>{desc}</span></h4>
        </div>
        <p className="mailRow__time">{time}</p>
    </div>
  )
}

export default MailRow