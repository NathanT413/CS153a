import React, { useCallback } from "react";
import { Text, ScrollView, Button, Linking, StyleSheet, View, Image } from "react-native";
import {useValue} from './ValueStorageContext';

const SettingTutorials= "https://www.youtube.com/watch?v=FNj_YkYFYVs&list=PLHTAhX214Fmfs-M0x8qcHHhKMsMSGMHoy";
const PassingTutorials= "https://www.youtube.com/watch?v=gOgfoEGUDCA&list=PLHTAhX214Fmc0Aou6E5g2fE_rFf6KZuYN";
const ExerciseTutorials= "https://www.youtube.com/watch?v=gjTwcqLBr1I&list=PLHTAhX214FmcEQ_LFzDnQGZkj5pe3fa7O";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Donny = () => {
    const {currentValue} = useValue();
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.profile}> 
            <Text> username: {currentValue.username} /</Text>
            <Text> position: {currentValue.position} </Text>
        </View>
        <Text style={styles.header}> Elevate Yourself/Coach Donny</Text>
        <Text style={styles.description}> 
            Many volleyball players, new and experienced, watch Coach Donny's videos to learn new skills and improve their own. 
            He has over 500k subscribers on YouTube where he posts many volleyball-related videos including skill tutorials, his
            own games, and commentaries of games!
            The buttons below will lead you to some playlists on his YouTube channel. 
        </Text>
        <View style={styles.buttons}> 
            <View> 
                <Image 
                    style={styles.image}
                    source={{uri:'https://i.ytimg.com/vi/FNj_YkYFYVs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCkjqmSMnJzD19_QFL72uj-AVlarQ' }} 
                />
                <OpenURLButton url={SettingTutorials}>Watch Setting Tutorials</OpenURLButton>
            </View>
            <View>
                <Image  
                    style={styles.image}
                    source={{uri:'https://i.ytimg.com/vi/gOgfoEGUDCA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBuCOPSkqGkRTOAci5JszAuHYHhqw' }} 
                />
                <OpenURLButton url={PassingTutorials}>Watch Passing Tutorials</OpenURLButton>
            </View>
            <View> 
                <Image 
                    style={styles.image}
                    source={{uri:'https://i.ytimg.com/vi/gjTwcqLBr1I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhgxUjgMOYlSgzYLR9TQMHOu9nmw' }} 
                />
                <OpenURLButton url={ExerciseTutorials}>Watch Exercise Tutorials</OpenURLButton>
            </View>
        </View>
        </ScrollView>
    </View>
  );
};

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
    },
    header: {
        fontSize: 36,
        fontWeight:'bold',
        flex: 1, 
        margin: 10,
        alignSelf: 'center'
    },
    description: {
        fontSize: 18,
        flex: 2,
        margin: 10
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 10,
    },
    buttons: {
        flexDirection: 'column',
        flex: 3,
        justifyContent: 'space-evenly'
    }, 
});

export default Donny;