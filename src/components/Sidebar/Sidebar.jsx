import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context.jsx'

const Sidebar = () => {

    const [extended, setExtended] = useState(false) // State to manage the sidebar extension
    const { onSent, prevPrompts, setRecentPrompts, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompts(prompt)
        await onSent(prompt) // Function to load the prompt
    }

    return (
        <div className='sidebar'> {/*  Sidebar */}

            <div className="top"> {/*  Top section */}
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" /> {/* menu icon */}

                {/*  New chat text */}
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null} {/* ternary operator for extended state of new chat */}
                </div>

                {/* ternary operator for extended state of recent chat */}
                {extended
                    ? <div className="recent"> {/*  Recent section */}
                        <p className='recent-title'>Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} className="recent-entry">  
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                    : null
                }
            </div>

            {/*  Bottom section */}
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null} {/* ternary operator for extended state of help */}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null} {/* ternary operator for extended state of activity */}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null} {/* ternary operator for extended state of settings */}
                </div>
            </div>


        </div>
    )
}

export default Sidebar