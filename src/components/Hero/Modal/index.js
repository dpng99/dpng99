import React, {useEffect, useRef, useCallback} from 'react';
import {useSpring, animated } from 'react-spring'
import { Background, ModalWraper, ModalImg, ModalContent, CloseModalContent} from './ModalComponent'
const Modal = (showModal, setShowModal) => {
    return (
        <>
        {showModal ? (
        <Background>
            <ModalWraper showModal={showModal}>
                <ModalImg src={require('../../../img/tanah.jpg')}/>
                <ModalContent>
                     <h1>READY ORA
                     </h1>
                     <p>
                         yagitudah itu doangan
                     </p>
                     <button>Joinan</button>
                </ModalContent>
                <CloseModalContent aria-label='Close modal' onClick={() => setShowModal(prev => !prev )}></CloseModalContent>
            </ModalWraper>
        </Background>
        ) : null}
        </>
    );   
};

export default Modal
