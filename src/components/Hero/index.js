import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWraper, ArrowForward, ArrowRight, HeroP, HeroImgContainer, Gambar1, HeroImgContainer2, Gambar2} from './HeroComponent'
import video from '../../video/video.mp4'
import {Button} from '../ButtonElement'
import img from '../../img/penyu.png'
import Modal from './Modal'
const Hero = () => {
const [hover, setHover] = useState(false)
const onHover = () =>{
    setHover(!hover)
}
const [showModal, setShowModal] = useState(false)

const openModal = () => {
    setShowModal(prev => !prev)
}
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <HeroImgContainer onClick={openModal}>
                    <Gambar1 src={img} type="image/png"/>
            </HeroImgContainer>
            <HeroImgContainer2>
                    <Gambar2 src={img} type="image/png"/>
            </HeroImgContainer2>
            <HeroContent>
                <HeroH1>
                    DPNG99
                </HeroH1>
                <HeroP>
                    KONTOL LAH ANJING BABI
                </HeroP>
              
                <HeroBtnWraper>
                    <Button to='signup' onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get Staarted {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWraper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
