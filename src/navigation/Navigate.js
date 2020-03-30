import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/Home/Home';
import EditPostScreen from '../screens/EditPost/EditPost';
import BlogListScreen from '../screens/BlogList/BlogList';
import CreatePostScreen from '../screens/CreatePost/CreatePost';


const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditPostScreen} />
        <Stack.Screen name="Show" component={BlogListScreen} title="Blog Post" />
        <Stack.Screen name="Create" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigate;

