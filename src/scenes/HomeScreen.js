import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Separator = () => (
    <View style={styles.separator} />
);

const HomeScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <Button
            onPress={() => { navigation.navigate('AddNewStory') }}
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
    title: {
        textAlign: 'center',
        marginVertical: 8,
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

export default HomeScreen;