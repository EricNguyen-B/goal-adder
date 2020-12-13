import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView,
  FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }; 

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { key: Math.random().toString(), text : enteredGoal}]);
  };

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Monthly Goals" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />

        {/* Add another goal */}
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
        <View style={styles.listItem}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent : 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
