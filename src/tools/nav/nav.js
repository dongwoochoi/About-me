import './nav.css'
import Modal from '../contact/contact';
import React, { useState } from 'react';

function Nav(){
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return(
        <div className="nav_main">
            <h2 className="logo">Logo</h2>
            <nav className="navigation">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skill</a>
                <a href="#">Activities</a>
                <button onClick={openModal} className="contact_button">Contact</button>
            </nav>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
            </Modal>
        </div>
    );
}
export default Nav;