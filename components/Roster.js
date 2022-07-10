import React from 'react';
import { Text,  FlatList, View, StyleSheet, Image  } from 'react-native';
import {useValue} from './ValueStorageContext';

  const data =
  [
    { key: 'Matt Anderson', position: 'Opposite/Outside Hitter', height: '6 ft 10 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Anderson-Matt-00370.jpg' },
    { key: 'Taylor Averill', position: 'Middle Blocker', height: '6 ft 7 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Averill.jpg' },
    { key: 'Mason Briggs', position: 'Libero', height: '6 ft 0 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Mason-Briggs.jpg'},
    { key: 'Micah Christenson', position: 'Setter', height: '6 ft 5 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Christenson.jpg' },
    { key: 'Kyle Dagostino', position: 'Libero', height: '5 ft 9 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Dagostino-Kyle-05056.jpg' },
    { key: 'TJ Defalco', position: 'Outside Hitter', height: '6 ft 5 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/06/TJ_DeFalco2_500x500.jpg' },
    { key: 'Kyle Ensing', position: 'Opposite Hitter', height: '6 ft 7 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Ensing.jpg' },
    { key: 'Patrick Gasman', position: 'Middle Blocker', height: '6 ft 10 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Patrick-Gasman.jpg' },
    { key: 'Jake Hanes', position: 'Opposite Hitter', height: '6 ft 10 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/05/Hanes-Jake-500x500-1.jpg' },
    { key: 'Max Holt', position: 'Middle Blocker', height: '6 ft 10 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Holt.jpg' },
    { key: 'Thomas Jaeschke', position: 'Outside Hitter', height: '6 ft 6 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Jaeschke.jpg' },
    { key: 'Jeff Jendryk', position: 'Middle Blocker', height: '6 ft 10 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Jendryk.jpg' },
    { key: 'Cody Kessel', position: 'Outside Hitter', height: '6 ft 5 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Cody-Kessel.jpg' },
    { key: 'Tyle Mitchem', position: 'Middle Blocker', height: '6 ft 11 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Tyler-Mitchem.jpg' },
    { key: 'Garrett Muagututia', position: 'Outside Hitter', height: '6 ft 5 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Muagututia.jpg' },
    { key: 'Jacob Pasteur', position: 'Outside Hitter', height: '6 ft 4 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Jacob-Pasteur.jpg' },
    { key: 'Aaron Russell', position: 'Outside Hitter', height: '6 ft 9 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Russell-A.jpg' }, 
    { key: 'Kyle Russel', position: 'Opposite Hitter', height: '6 ft 9 in', image: 'https://usavolleyball.org/wp-content/uploads/2022/06/Kyle-Russell.jpg' },
    { key: 'Erik Shoji', position: 'Libero', height: '6 ft 0 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Shoji-E.jpg' },
    { key: 'Kawika Shoji', position: 'Setter', height: '6 ft 3 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Shoji-K.jpg' }, 
    { key: 'David Smith', position: 'Middle Blocker', height: '6 ft 7 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Smith.jpg' }, 
    { key: 'Mitch Stahl', position: 'Middle Blocker', height: '6 ft 9 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Stahl.jpg'},
    { key: 'Josh Tuaniga', position: 'Setter', height: '6 ft 3 in', image: 'https://usavolleyball.org/wp-content/uploads/2021/02/Tuaniga.jpg'}
 ];



 const rosterItem = (item) => {
    return (
        <View style={styles.blocks}>
            <View style={{flexDirection: "row", paddingBottom: 10}}>
                <Image source={{uri:item.image}}  style={styles.image}/>
            <View style={styles.profile}>
                <Text style={{fontSize: 18}}>{item.key} </Text>
            <Text>{item.position}</Text>
            <Text style={{color: "grey", paddingTop: 5}}>{item.height}</Text>
            </View>
            </View>
        </View>
    );
}


const Roster = () => {
    const {currentValue} = useValue();
    return (
        <View style={{flex:1}}>
            <View style={styles.userprofile}> 
                <Text> username: {currentValue.username} /</Text>
                <Text> position: {currentValue.position} </Text>
            </View>
            <Text style={{fontSize:30}}>USA National Team</Text>
            <FlatList
               data = {data}
               renderItem={({item}) => rosterItem(item)}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    userprofile: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5,
        flex: 1,
      },
    blocks: {
        padding: 10, 
        margin:5, 
        borderWidth:2, 
        backgroundColor:'#fedcba'
    },
    image: {
        width:100, 
        height:100,
        borderRadius:30

    },
    profile: {
        flexDirection: 'column',
        margin: 10,
    }
  });

export default Roster;