import React, { useState } from 'react';
import {Text} from 'react-native';
import { Textarea, Button } from "native-base";
import styled from 'styled-components';
import marked from 'marked';
import HTML from 'react-native-render-html';
import { Clipboard, ScrollView } from 'react-native'
import insane from 'insane';

const Screen = ({ navigation }) => {

    const [markDown, setMarkDown] = useState(insane(''));

    copyToClipboard = async () => {
        await Clipboard.setString(markDown);
        alert('Copied to Clipboard!');
      };

    return (
    <>
        <Container>
            <TextContainer>
                <Textarea
                style={{ height: '100%', backgroundColor: '#ebebeb' }}
                placeholder="Type here to get your markdown!"
                onChangeText={setMarkDown}
                />
            </TextContainer>
            <ScrollViewContainer>
                <HTML html={marked(markDown)}/>
            </ScrollViewContainer>
            <ButtonResult onPress={this.copyToClipboard}><Text>Copy result</Text></ButtonResult>
        </Container>
    </>
    );
}
Screen.navigationOptions = {
  title: 'MarkDown Viewer'
}
export default Screen;

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    justifyContent: center;
`
TextContainer= styled.View`
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
`
ScrollViewContainer= styled.ScrollView`
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
`
const ButtonResult = styled(Button)`
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: #ebebeb;
    padding: 10px;
	width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 10px;
`


// const Container = styled.View`
// position:absolute;
// background:black;
// width:100%;
// height:100%;

// display: flex;
// flex-direction:column;
// `
// TextContainer= styled.View`
// flex:1;
// display:flex;
// flex-direction:column;
// `