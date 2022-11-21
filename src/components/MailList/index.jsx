import { ArrowDropDown, ChevronLeft, ChevronRight, Keyboard, MoreVert, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'

function index() {
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
    </div>
  )
}

export default index