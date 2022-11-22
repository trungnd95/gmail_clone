import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, Keyboard, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import "./index.css"
import MailRow from './MailRow'
import Section from './Section'

function MailList() {
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
            <MailRow 
                id="1" 
                title="Trung Ng" 
                subject="First email" 
                desc="This is first email test" 
                time="12AM" 
            />
        </div>
    </div>
  )
}

export default MailList 