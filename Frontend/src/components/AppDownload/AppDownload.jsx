import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownloads = () => {
  return (
    <div className="app-download" id="app-download">
      <p>For better ecperience Download <br />WebPlus App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownloads