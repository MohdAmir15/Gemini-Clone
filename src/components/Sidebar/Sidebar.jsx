import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended, setExtended] = useState(false) // State to manage the sidebar extension

    return (
        <div className='sidebar'> {/*  Sidebar */}

            <div className="top"> {/*  Top section */}
                <img onClick={()=> setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" /> {/* menu icon */}

                {/*  New chat text */}
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null} {/* ternary operator for extended state of new chat */}
                </div>

                {/* ternary operator for extended state of recent chat */}
                {extended
                    ? <div className="recent"> {/*  Recent section */}
                        <p className='recent-title'>Recent</p>
                        <div className="recent-entry">  {/* Recent entry */}
                            <img src={assets.message_icon} alt="" />
                            <p>What is React ...</p>
                        </div>
                    </div>
                    : null
                }

            </div>

            {/*  Bottom section */}
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended? <p>Help</p>: null} {/* ternary operator for extended state of help */}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended? <p>Activity</p>: null} {/* ternary operator for extended state of activity */}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended? <p>Settings</p>: null} {/* ternary operator for extended state of settings */}
                </div>
            </div>


        </div>
    )
}

export default Sidebar