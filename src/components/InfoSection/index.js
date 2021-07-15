import React from 'react'

import{ InfoContainer, InfoWraper,  InfoBackground, ImageBackground } from './InfoElement'
import image from '../../img//tanah.jpg'
const IndoSection = () => {
    return (
    <>
    <InfoContainer>
        
        <InfoWraper>
        <InfoBackground>
            <ImageBackground src={image} type="image/jpg" />
        </InfoBackground>
            
        </InfoWraper>
    </InfoContainer>
    </>
    )
}

export default IndoSection
