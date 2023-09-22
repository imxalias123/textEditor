import styled from 'styled-components'

export const EditorContainer = styled.div`
  height: 80vh;
  width: 40vw;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
`

export const List = styled.li`
  margin-right: 10px;
`

export const HorizontalLine = styled.hr`
  color: #cbd5e1;
`
export const Button1 = styled.button`
  background-color: transparent;

  color: ${props => (props.activeBold ? '#faff00' : '#f1f5f9')};
  border: none;
`

export const Button2 = styled.button`
  background-color: transparent;
  color: ${props => (props.activeItalic ? '#faff00' : '#f1f5f9')};
  border: none;
`

export const Button3 = styled.button`
  background-color: transparent;
  color: ${props => (props.activeUnderline ? '#faff00' : '#f1f5f9')};
  border: none;
`
export const Textarea = styled.textarea`
  margin-left: 20px;
  margin-top: 20px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.activeUnderline ? 'underline' : 'normal')};
`
