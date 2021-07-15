import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #000;
background: black;

`
export const InfoWraper = styled.div`
display: grid;
z-index: 1;
height: 100%;
width: 100%;
margin-right: auto;
margin-left: auto;
padding : 0;
justify-content: center;
`
export const InfoRow = styled.div`
display: grid;
grid-auto-columns:  minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1' 'col2'`)};
@media screen and (max-width:768px){
    grid-template-areas: ${({imgStart}) => (imgStart ?  `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
};
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWraper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({LightText}) => (LightText ? '#f7f8fa' : '010606')};
@media screen and (max-width:480px){

    font-size:32px;
}
`
export const Subtitle = styled.p`
max-width: 440pc;
margin-bottom: 35px;
font-size: 10px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const Img = styled.img`
width: 100%;
margin: 0 0 18px 0;
padding-right: 0;
`
export const imgWrap = styled.div`
max-width: 100%;
height: 100%;
`
export const InfoBackground = styled.div`
position: absolute;

width: 100%;
height: 100%;
overflow: hidden;
`
export const ImageBackground = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34

`