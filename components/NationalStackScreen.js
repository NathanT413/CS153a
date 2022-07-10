import React from 'react';
import { Text, View, ScrollView, Button, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useValue} from './ValueStorageContext';

import Roster from './Roster';

function NationalTeamsScreen({ navigation }) {
    const {currentValue} = useValue();
    return (
        <ScrollView>
            <View style={styles.profile}> 
          <Text> username: {currentValue.username} /</Text>
          <Text> position: {currentValue.position} </Text>
      </View>
            <View style={styles.container}>
            <Text style={styles.header}> National Team Rosters </Text>
            <Button
                title="View USA Team Roster"
                onPress={() => navigation.navigate('USATeam')}
            />
            </View>
        </ScrollView>
    );
  }
  
  const NationalStack = createNativeStackNavigator();
  
  function NationalStackScreen() {
    return (
      <NationalStack.Navigator >
        <NationalStack.Screen name="National Team Rosters" component={NationalTeamsScreen} />
        <NationalStack.Screen name="USATeam" component={Roster} />
      </NationalStack.Navigator>
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

  export default NationalStackScreen;