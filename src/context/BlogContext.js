// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';


const blogReducer = (state, action) => {

    switch (action.type) {
        case 'addPost':
            return [...state, { id: Math.floor(Math.random() * 9999) + 1, title: `Blog Post #${state.length + 1}` }]
        case 'editPost':
            return {} 
        case 'deletePost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'addPost' })
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deletePost' , payload: id});
    }
}

const initialState = []

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost , deleteBlogPost},
    initialState
);










// // const BlogContext = React.createContext();

// // const BlogProvider = ({ children }) => {
//     //using the useState hook.

//     // const [blogPosts, setBlogPosts] = useState([]);

//     // const addBlogPost = () => {
//     //     setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
//     // }


//     //UseReducer
//     // const reducer = (state, action) => {

//     //     switch (action.type) {
//     //         case 'addPost':
//     //             return [...state, { title: `Blog Post #${state.length + 1}` }]
//     //         case 'editPost':
//     //             return {}
//     //         case 'deletePost':
//     //             return {}
//     //         default:
//     //             return state;
//     //     }
//     // }
//    //  const [blogPosts, dispatch] = useReducer(reducer, []);

//     // const addBlogPost = () => {
//     //     dispatch({ type: 'addPost' })
//     // }




//     // return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
//     //     {children}
//     // </BlogContext.Provider>

// };

// export {
//     BlogProvider
// }

// export default BlogContext;