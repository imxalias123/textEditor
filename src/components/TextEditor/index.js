import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  EditorContainer,
  UnorderedList,
  List,
  HorizontalLine,
  Button1,
  Button2,
  Button3,
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
    this.setState(prevState => ({
      activeBold: !prevState.activeBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      activeItalic: !prevState.activeItalic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      activeUnderline: !prevState.activeUnderline,
    }))
  }

  render() {
    const {input, activeBold, activeItalic, activeUnderline} = this.state
    return (
      <EditorContainer>
        <UnorderedList>
          <List>
            <Button1
              type="button"
              onClick={this.onClickBold}
              activeBold={activeBold}
              data-testid="bold"
            >
              <VscBold size={25} />
            </Button1>
          </List>
          <List>
            <Button2
              type="button"
              onClick={this.onClickItalic}
              activeItalic={activeItalic}
              data-testid="italic"
            >
              <GoItalic size={25} />
            </Button2>
          </List>
          <List>
            <Button3
              type="button"
              onClick={this.onClickUnderline}
              activeUnderline={activeUnderline}
              data-testid="underline"
            >
              <AiOutlineUnderline size={25} />
            </Button3>
          </List>
        </UnorderedList>
        <HorizontalLine />
        <Textarea
          value={input}
          onChange={this.onChangeInput}
          activeBold={activeBold}
          activeItalic={activeItalic}
          activeUnderline={activeUnderline}
        />
      </EditorContainer>
    )
  }
}

export default TextEditor
