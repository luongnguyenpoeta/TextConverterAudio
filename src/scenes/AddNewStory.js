import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { saveToDB, textToSpeech } from '../services/SpeechService';

const Separator = () => (
    <View style={styles.separator} />
);

const AddNewStory = ({ navigation }) => {
    const [textTitle, setTextTitle,] = useState('');
    const [text, setText] = useState('');
    const [checked, setChecked] = useState('');
    return (
        < SafeAreaView style={styles.container} >
            <ScrollView>
                <Text style={styles.title}>Title</Text>
                <TextInput
                    style={styles.titleTextField} ter
                    onChangeText={textTitle => setText(textTitle)}
                    defaultValue={text}
                ></TextInput>
                <Text style={styles.title}>Gender</Text>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        title='Female'
                        value="1"
                        status={checked === '1' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('1')}
                    />
                    <Text style={styles.title}>Female</Text>
                    <RadioButton
                        title='Male'
                        value="3"
                        status={checked === '3' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('3')}
                    />
                    <Text style={styles.title}>Male</Text>
                </View>
                <Text style={styles.title}>Content</Text>
                <TextInput
                    multiline={true}
                    style={styles.inputTextField}
                    onChangeText={text => setTextTitle(text)}
                    defaultValue={textTitle}
                ></TextInput>
                <Button
                    title="Submit"
                    onPress={async () => {
                        // Post to Zalo AI
                        const url = await textToSpeech(text, int(checked))
                        // Save to db
                        const obj = ({ 'title': textTitle, 'url': !url ? url : 'https://chunk.lab.zalo.ai/7ad8286da03c4962102d/7ad8286da03c4962102d', 'speaker_id': checked })
                        navigation.pop()
                        this.props.reloadData(obj);
                    }}
                />
            </ScrollView>
            <Separator />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    inputTextField: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        height: 200,
        marginVertical: 8,
    },
    titleTextField: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        marginVertical: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'left',
        marginVertical: 8,
        fontSize: 18
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default AddNewStory;