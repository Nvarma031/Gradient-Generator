import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {GradientDirectionItemDetails, onClickDirectionButton, isActive} = props
  const {displayText, value} = GradientDirectionItemDetails

  const onClickDirection = () => {
    onClickDirectionButton(value)
  }

  return (
    <ListItem>
      <CustomButton
        onClick={onClickDirection}
        type="button"
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
