import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

export const CustomButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  height: 35px;
  width: 100px;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
