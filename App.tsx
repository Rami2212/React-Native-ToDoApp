import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import TaskScreen from './src/screens/TaskScreen';
import { COLORS } from './src/constants/colors';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.BACKGROUND} barStyle="light-content" />
      <TaskScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default App;