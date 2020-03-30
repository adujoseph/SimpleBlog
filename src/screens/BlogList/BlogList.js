import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Context } from '../../context/BlogContext'
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();


const screenHeight = Dimensions.get('window').height;

const BlogListScreen = ({ route, navigation }) => {
    //navigation.getParam('id') for react-navigation v4 and below
    const { id } = route.params
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <>
            <ScrollView>
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{blogPost.title}</Text>
                    <Text style={styles.description}>{blogPost.description}</Text>
                    <Text style={styles.content}>{blogPost.content}</Text>
                </View>
            </ScrollView>
            <View style={[styles.floatBtn, { top: screenHeight * 0.7 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id : id})} >
                    <Icon name="edit" size={40} color="white" />
                </TouchableOpacity>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'blue',
        padding: 10
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray',
        fontStyle: 'italic'
    },
    content: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
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


export default BlogListScreen;