import React, { useState } from 'react';
import {Text} from 'react-native';
import { Textarea } from "native-base";
import styled from 'styled-components';

const Screen = ({ navigation }) => {

    const [markDown, setMarkDown] = useState('');

    return (
    <>
        <Container>
            <TextContainer>
                <Textarea
                style={{ height: '100%' }}
                placeholder="Type here to get your markdown!"
                onChangeText={setMarkDown}
                />
            </TextContainer>
            <TextContainer>
                <Text style={{ height: '100%', backgroundColor: '#ebebeb' }}>
                {markDown}
                </Text>
            </TextContainer>
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