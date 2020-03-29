import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/BlogContext'
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    return (
        <View>
             <CustomButton title={'Add Posts'} clicked={() => addBlogPost()} />

            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.blogList}>
                                <Text style={styles.blogTitle}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Icon name="ios-trash" size={30} color="#900" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
           
        </View>
    )
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
    }
});


export default HomeScreen;