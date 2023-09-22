import './App.css'

import TextEditor from './components/TextEditor'
import {
  Container,
  InnerContainer,
  Img,
  Heading,
  Div,
  TextContainer,
} from './styledComponent'

// Replace your code here
const App = () => (
  <Container>
    <InnerContainer>
      <Div>
        <Heading>Text Editor</Heading>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
      </Div>
      <TextContainer>
        <TextEditor />
      </TextContainer>
    </InnerContainer>
  </Container>
)

export default App
