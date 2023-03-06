import './nav.css'
import Modal from '../contact/contact';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend, IoIosAirplane, IoIosAlarm, IoIosAnalytics, IoIosAperture, IoIosColorPalette, IoIosClose } from "react-icons/io";
import { Activities_on, Skill_on, Home_on, About_on } from '../../store';

function Nav(){
    let dispatch = useDispatch();
    let [btnstate, set_btnstate] = useState("");
    let page_state = useSelector((state) => { return state } )
    return(
        <div className='nav_app'>
            <div className="nav_main">
                <h2 className="logo">About_Me</h2>
                <nav className="navigation">
                    <a onClick={()=>{ 
                        dispatch(Home_on());
                     }} href="#">Home</a>
                    <a onClick={()=>{ 
                        dispatch(About_on());
                     }} href="#">About</a>
                     <a onClick={()=>{ 
                        dispatch(Skill_on());
                     }} href="#">Skill</a>
                     <a onClick={()=>{ 
                        dispatch(Activities_on());
                     }} href="#">Activities</a>
                    <button onClick={()=>{
                        set_btnstate("active");
                    }} className="contact_button">Contact</button>
                </nav>
            </div>
            <div className='second'>
                <div className={'contact_me' +" "+ btnstate}>
                    <span onClick={()=> {
                        set_btnstate("")
                    }} className='close_btn'><IoIosClose></IoIosClose></span>
                    <div className='form_box contact_box'>
                        <h2>Contact Me</h2>
                        <form action='#'>
                            <div className='input_box'>
                                <h3>Comment to me</h3>
                                <span className='icon'><IoMdSend></IoMdSend></span>
                                <input type="comment" required></input>
                                <label>Comment</label>
                            </div>
                            <div className='links_box'>
                                <h3>My Links!</h3>
                                <span className='icon'>
                                    <IoMdSend></IoMdSend>
                                    <IoIosAlarm></IoIosAlarm>
                                    <IoIosAnalytics></IoIosAnalytics>
                                    <IoIosAperture></IoIosAperture>
                                    <IoIosColorPalette></IoIosColorPalette>
                                    <IoIosAirplane></IoIosAirplane>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Nav;