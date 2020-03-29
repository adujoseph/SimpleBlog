import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, clicked }) => {
    return (
        <View>
            <TouchableOpacity onPress={clicked} style={{ height: 40, width: '80%', backgroundColor: 'blue', marginVertical: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' , borderRadius: 30}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;