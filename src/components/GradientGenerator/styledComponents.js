import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const TextContent = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
`
export const UnorderedList = styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 300px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`

export const ColorValue = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: 'Roboto';
  color: #ffffff;
`
export const ColorInput = styled.input`
  font-size: 20px;
  border-width: 0px;
  height: 50px;
  width: 110px;
  outline: none;
  border: none;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  font-size: 15px;
  height: 35px;
  width: 130px;
  background-color: #00c9b7;
  border-width: 0px;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`
