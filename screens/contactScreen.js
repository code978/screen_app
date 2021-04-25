
// screens/ contactScreen.js

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const contactScreen = () =>{
    return(
        <View style={styles.center}>
            <Text>This is contact Screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center:{
        justifyContent:"center",
        alignItems:'center',
        textAlign:"center",
    },
});

export default contactScreen;