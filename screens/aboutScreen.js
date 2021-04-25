
// screens/aboutScreen.js

import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const aboutScreen = () =>{
    return(
        <View style={styles.center}>
            <Text>This is about Screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
    },
});

export default aboutScreen;