import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  EditorContainer,
  UnorderedList,
  List,
  HorizontalLine,
  Button,
  Textarea,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    input: '',
    activeBold: false,
    activeItalic: false,
    activeUnderline: false,
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickBold = () => {
    this.setState({
      activeBold: true,
    })
  }

  onClickItalic = () => {
    this.setState({
      activeItalic: true,
    })
  }

  onClickUnderline = () => {
    this.setState({
      activeUnderline: true,
    })
  }

  render() {
    const {input, activeBold, activeItalic, activeUnderline} = this.state
    return (
      <EditorContainer>
        <UnorderedList>
          <List>
            <Button type="button" onClick={this.onClickBold}>
              <VscBold />
            </Button>
          </List>
          <List>
            <Button type="button" onClick={this.onClickItalic}>
              <GoItalic />
            </Button>
          </List>
          <List>
            <Button type="button" onClick={this.onClickUnderline}>
              <AiOutlineUnderline />
            </Button>
          </List>
        </UnorderedList>
        <HorizontalLine />
        <Textarea value={input} onChange={this.onChangeInput} />
      </EditorContainer>
    )
  }
}

export default TextEditor
