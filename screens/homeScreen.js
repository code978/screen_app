
// screens/homeScreen.js

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const homeScreen = ({navigation}) => {

    return (
        <View style={styles.center}>
            <Text>This is the home Screen.</Text>
            <Button title="Go to About Screen."
                onPress={() => navigation.navigate("aboutScreen")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default homeScreen;