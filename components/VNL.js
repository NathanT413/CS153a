import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useValue} from './ValueStorageContext';

import NationalTeamsScreen from './NationalStackScreen';

function VNLScreen({ navigation }) {
  const {currentValue} = useValue();
  return (
    <ScrollView>
      <View style={styles.profile}> 
          <Text> username: {currentValue.username} /</Text>
          <Text> position: {currentValue.position} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Learn about the Volleyball National League</Text>
        <Button
          title="View National Team Rosters"
          onPress={() => navigation.navigate('VNL Teams')}
        />
      </View>
    </ScrollView>
  );
}

const VNLStack = createNativeStackNavigator();

function VNLStackScreen() {
  return (
    <VNLStack.Navigator >
      <VNLStack.Screen name="VNLHome" component={VNLScreen} />
      <VNLStack.Screen name="VNL Teams" component={NationalTeamsScreen} />
    </VNLStack.Navigator>
  );
}



const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
    flex: 1,
  },
  container: {
    justifyContent: 'center', 
    alignItems:'center',
    flex: 1,
    margin: 10,
  },
  header: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
  }
});


export default VNLStackScreen;