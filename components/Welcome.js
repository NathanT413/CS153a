import React,{useState,useEffect} from 'react';
import {View, Text,TextInput, Button, StyleSheet} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Welcome = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [username,setusername] = useState(currentValue.username);
    const [position,setposition] = useState(currentValue.position);
    
    const [text, setText] = useState();

    function Setter() {
        setText("Setter");
    }
    function OutsideHitter() {
        setText("Outside Hitter")
    }
    function MiddleBlocker() {
        setText("Middle Blocker")
    }
    function OppositeHitter() {
        setText("Opposite Hitter")
    }
    function Libero() {
        setText("Libero")
    }

    function setPos() {
        setposition(text)
    }

    useEffect(()=> {
        setusername(currentValue.username);
        setposition(currentValue.position);
         },
        [currentValue]);

    return ( 
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to my app! </Text>
            <Text style={{margin:10}}>Enter your username below and use the buttons to choose your position. Then click "SAVE DATA"</Text>
            <Text style={styles.profile}>Your username is<Text style={{fontWeight:'bold'}}> {username} </Text> 
                and your position is <Text style={{fontWeight:'bold'}}>{text}</Text></Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text style={{fontSize: 18}}>Enter your username: </Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setusername(text)} 
                    value={username}
                />
            </View>

            
            <View style={styles.buttons}> 
                <View style={{flex:1}}>
                <Button 
                    title="Setter" 
                    onPress={() => {
                        Setter(); 
                    }}
                />
                <Button 
                    title="Outside Hitter" 
                    onPress={() => {
                        OutsideHitter(); 
                    }} 
                    />
                <Button 
                    title="Middle Blocker" 
                    onPress={() => {
                        MiddleBlocker(); 
                    }} 
                />
                </View>
                <View style={{flex:1}}>
                <Button 
                    title="Opposite Hitter" 
                    onPress={() => {
                        OppositeHitter(); 
                    }} 
                />
                <Button 
                    title="Libero" 
                    onPress={() => {
                        Libero(); 
                    }} 
                    value={position}
                    />
                <Button
                    title = "Confirm Position"
                    color="red"
                    onPress={() => {
                        setPos();
                    }}
                    />
                </View>
            </View>
            
            
            <Button 
               title="save data"
               onPress = {() => {
                    setPos();
                    setCurrentValue({username, position})
               }}
               />
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        flex:1, 
        marginTop:30 
    },
    welcome: { 
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    profile: {
      fontSize: 18,  
      alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
  });

export default Welcome;