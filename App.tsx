import Routes from '@cuteapp/routes/routes';
import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes />
    </View>
  );
};

export default App;
