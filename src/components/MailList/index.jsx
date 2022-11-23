import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, Keyboard, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import "./index.css"
import MailRow from './MailRow'
import Section from './Section'

function MailList() {
  const [emails, setEmails] = useState([{}]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setEmails(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})));
    })
  }, [])
  
  return (
    <div className="mailList">
        <div className="mailList__settings">
            <div className="mailList_settingsLeft">
                <Checkbox />
                <IconButton><ArrowDropDown /></IconButton>
                <IconButton><Redo /></IconButton>
                <IconButton><MoreVert /></IconButton>
            </div>
            <div className="mailList_settingsRight">
                <IconButton><ChevronLeft /></IconButton>
                <IconButton><ChevronRight /></IconButton>
                <IconButton><Keyboard /></IconButton>
                <IconButton><Settings /></IconButton>
            </div>   
        </div>
        <div className="mailList__sections">
            <Section Icon={Inbox} title="Primary" color="red" selected={true} />
            <Section Icon={People} title="Social" color="#1A73E8" />
            <Section Icon={LocalOffer} title="Promotions" color="green" />
        </div>

        <div className="mailList__lists">
            {emails?.map(email => (
                <MailRow 
                    id={email?.id} 
                    title={email?.data?.to}
                    subject={email?.data?.subject} 
                    desc={email?.data?.message} 
                    time={new Date(email?.data?.timestamp?.seconds *1000).toUTCString()}
                />
            ))}
        </div>
    </div>
  )
}

export default MailList 