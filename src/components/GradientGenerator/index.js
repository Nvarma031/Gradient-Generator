import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  TextContent,
  UnorderedList,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b `,
  }

  onClickDirectionButton = direction => {
    this.setState({activeGradientDirection: direction})
  }

  renderGradientDirectionItem = () => {
    const {activeGradientDirection} = this.state
    return (
      <UnorderedList>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            GradientDirectionItemDetails={eachItem}
            key={eachItem.directionId}
            onClickDirectionButton={this.onClickDirectionButton}
            isActive={activeGradientDirection === eachItem.value}
          />
        ))}
      </UnorderedList>
    )
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onClickGenerateColor = () => {
    const {fromColor, toColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${toColor} , ${fromColor}`,
    })
  }

  render() {
    const {fromColor, toColor, gradientValue} = this.state
    return (
      <AppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a Css Color Gradient</Heading>
        <TextContent>Choose Direction</TextContent>
        {this.renderGradientDirectionItem()}
        <TextContent>Pick the Colors</TextContent>
        <ColorPickerContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{fromColor}</ColorValue>
            <ColorInput
              onChange={this.onChangeFromColor}
              value={fromColor}
              type="color"
            />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{toColor}</ColorValue>
            <ColorInput
              onChange={this.onChangeToColor}
              value={toColor}
              type="color"
            />
          </CustomInputAndColorContainer>
        </ColorPickerContainer>
        <GenerateButton onClick={this.onClickGenerateColor}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
