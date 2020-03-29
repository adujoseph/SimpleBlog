import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigate from './src/navigation/Navigate';

import { Provider } from './src/context/BlogContext';

// class App extends React.Component{
//   render(){
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <Navigate />
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigate />
    </>
  );
};

const styles = StyleSheet.create({

});

// export default App;

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
