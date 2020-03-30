import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/BlogContext'
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const screenHeight = Dimensions.get('window').height;


    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    console.log('state: ', state)
    return (
        <View>
            {state.title !== '' ?

                <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                                <View style={styles.blogList}>
                                    <View>
                                        <Text style={styles.blogTitle}>{item.title} </Text>
                                        <Text>{item.description}</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <Icon name="ios-trash" size={30} color="#900" />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                :
                <View style={{ justifyContent:'center', alignItems:'center' , padding: 50, textAlign: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '600' }}>You have posted nothing so far, click the add icon to get started</Text>
                </View>

            }

            <View style={[styles.floatBtn, { top: screenHeight * 0.7 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                    <Icon name="ios-add" size={60} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Icon name="ios-add" size={30} color="black" />
        </TouchableOpacity>

    }
}

const styles = StyleSheet.create({
    blogList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: 'lightgray',
        borderBottomWidth: 2,
        padding: 5
    },
    blogTitle: {
        fontSize: 30,
        fontWeight: '500'
    },
    floatBtn: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'blue',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // top: screenHeight,
        right: 20
    }
});


export default HomeScreen;