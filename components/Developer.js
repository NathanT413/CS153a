import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import {useValue} from './ValueStorageContext';


const App = () => {
  const {currentValue} = useValue();
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.profile}> 
          <Text> username: {currentValue.username} /</Text>
          <Text> position: {currentValue.position} </Text>
      </View>
     <View style = {styles.titleFormat}>
      <Text style = {styles.titleText}>
        About the Developer
      </Text>
     </View>
    <View style = {styles.aboutFormat}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://ih1.redbubble.net/image.1361531857.5070/st,small,507x507-pad,600x600,f8f8f8.jpg',
        }}
      />
     <Text style = {styles.aboutText}>
     My name is Nathan Tran and I am a rising junior at Brandeis University studying Computer Science. I am from Newton, Massachusetts. 
     I enjoy playing volleyball, and I am the setter on the Brandeis Men's Volleyball Club team.
     </Text>
     
    </View>
    <View style = {styles.descriptionFormat}>
      <View>
        <Text style={styles.descriptionTitle}>
          Dream for the app
        </Text>
      </View>
      <View>
      <Text style = {styles.descriptionText}>
        My dream for this app is to be a mobile app about everything volleyball. 
        It will be meant to be easily-used tool by volleyball players of all skill levels. 
        Its purpose is to help new volleyball players learn more about the game and existing ones to 
        improve their skills. I plan to add many useful features to accomplish this goal, including easy-to-follow 
        images, videos, and descriptions of volleyball skills essential to all players as well as skils 
        that may be more specific to each role on the court.
      </Text>
      </View>
    </View>
    </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent:'center',
    marginTop: 30,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
    flex: 1,
  },
  titleFormat: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'monospace'
  },
  aboutFormat: {
    flexDirection: 'column',
    padding: 25,
  },
  aboutText: {
    fontSize: 18,
    fontFamily: 'normal'
  }, 
  image: {
    width: 264,
    height: 232, 
    alignSelf: 'center',
    marginBottom: 10,
  },
  descriptionFormat: {
    paddingTop: 0,
    padding: 50,
  },
  descriptionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 25,
    color: 'red',
    fontFamily: 'Roberto'
  },
  descriptionText: {
    fontSize: 16,
  }, 
  descriptionInnerText: {
    color: 'blue'
  }

  
});

export default App;
