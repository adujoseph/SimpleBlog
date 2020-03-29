import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext'

const BlogListScreen = ({ route, navigation }) => {
    //navigation.getParam('id') for react-navigation v4 and below
    const { id } = route.params
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>{blogPost.title} - {blogPost.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});


export default BlogListScreen;