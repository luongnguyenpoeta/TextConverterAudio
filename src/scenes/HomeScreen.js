import React from 'react';
import {
    StyleSheet, Button, View, SafeAreaView, Text, Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

const Separator = () => (
    <View style={styles.separator} />
);

const onPressItem = (item) => { }

const renderItem = (item) => {
    return (
      <View>
        <View
            style={styles.containerItem}>
            
            <WebView
                source={{ uri: 'https://chunk.lab.zalo.ai/9abcbb353264db3a8275/9abcbb353264db3a8275' }}
                style={styles.videoStyle}
            />
            <MediaControls
                        mainColor="#333"
                        showOnStart={false}
                    ></MediaControls>
            <View >
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.textContent}>{item.content}</Text>
            </View>
            </View>
            <View style={ styles.separateLine}/>
    </View>
  )
}
const listData = [{title:'test', content: 'abc', url: ''}]

const HomeScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
         <FlatList
            data={listData}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()} />
        <Button
            onPress={() => { navigation.navigate('AddNewStory', { reloadData: this.reloadData }) }}
            title="Add New"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 20
    },
    text: {
        paddingLeft: 25,
        paddingRight: 25,
        color: "#0000ff",
        fontSize: 20,
        fontWeight: '500',
    },
    textContent: {
        paddingLeft: 25,
        paddingRight: 25,
        color: "#595959",
        fontSize: 12,
        fontWeight: '500',
    },
    videoStyle: {
        backgroundColor: '#0000ff',
        height: 50,
        width: 50,
    },
    separateLine: {
        height: 1,
        backgroundColor: "#999999",
    }
});

export default HomeScreen;