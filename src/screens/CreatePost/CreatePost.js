import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Context } from '../../context/BlogContext'

const CreatePostScreen = ({ navigation }) => {
    const[title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    return (
        <View>
          
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Enter Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter Title'}
                    autoCapitalize='none'
                    autoCompleteType={'off'}
                    autoCorrect={false}
                    maxLength={50}
                    value={title}
                    onChangeText={(val) => setTitle(val)}

                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Enter Description</Text>
                <TextInput
                    style={[styles.input, {height: 80}]}
                    placeholder={'Enter description'}
                    multiline={true}
                    maxLength={100}
                    value={description}
                    onChangeText={(val) => setDescription(val)}

                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Enter Article</Text>
                <TextInput
                    style={[styles.input, {height: 200}]}
                    placeholder={'Enter Content'}
                    multiline={true}
                    maxLength={1600}
                    value={content}
                    onChangeText={(val) => setContent(val)}

                />
            </View>


        <CustomButton 
        title={'Save'}
        clicked={() => {
            addBlogPost(title, description, content, () => {
                navigation.navigate('Home');
            });
        }}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginVertical: 5
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5
    },
    label:{
        alignSelf: 'flex-start',
        marginLeft: 20,
        padding: 5,
        fontWeight: '600'
    }
});


export default CreatePostScreen;