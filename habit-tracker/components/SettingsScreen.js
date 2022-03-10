import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, View, Text, Switch, StyleSheet, ScrollView, Pressable, Animated} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from './ThemeContext';

import { Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

function ThemeSelector({ navigation }) {
  const { useDarkTheme, darkTheme } = React.useContext(ThemeContext);
  const { colors } = useTheme();

  const ToggleTheme = () => useDarkTheme(previousState => !previousState);
  return (
    <View style={[styles.first, styles.item, styles.toggleItem, { backgroundColor:colors.card, borderBottomWidth:2, borderBottomColor:colors.border}]}>
      <Text style={[styles.title, {color:colors.text}]}>Use Dark Mode</Text>
      <Switch
        style={styles.switch}
        title="Switch Theme"
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={darkTheme ? colors.border : colors.primary}
        onValueChange={ToggleTheme}
        value={darkTheme}
      />
    </View>
  );
}

function NotificationSelector({ navigation }) {
  const { useDarkTheme, darkTheme } = React.useContext(ThemeContext);
  const { colors } = useTheme();

  const ToggleNotifications = () => useDarkTheme(previousState => !previousState);
  return (
    <View style={[styles.item, styles.toggleItem, { backgroundColor:colors.card, borderBottomWidth:2, borderBottomColor:colors.border}]}>
      <Text style={[styles.title, {color:colors.text}]}>Push Notifications</Text>
      <Switch
        style={styles.switch}
        title="Switch Theme"
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={darkTheme ? colors.border : colors.primary}
        onValueChange={ToggleNotifications}
        value={darkTheme}
      />
    </View>
  );
}

function DeleteOption(){
  var timer = useRef(new Animated.Value(0)).current;
  var timerId;
  const [percent, setPercent] = useState(0.0);

  const updateTimer = ({value}) =>{
    setPercent(value);
  };

  const startAnim = () => {
    setPercent(0);
    timerId = timer.addListener(updateTimer)
    Animated.timing(timer, {
    toValue: 1,
    duration: 5000, 
    useNativeDriver: false
    }).start(({ finished }) => {
      if(finished)
        console.log("Delete all data")
    });
  };

  const endAnim = () => {
    setPercent(0);
    Animated.timing(timer).reset();
    timer.removeListener(timerId);
  }

  return(
      <Pressable
        onPressIn={startAnim}
        onPressOut={endAnim}
      >
      
      <Animated.View>
        <LinearGradient
          colors={['#700b0b', '#d40b0b']}
          start={[0, 0]} end={[1, 0]}
          locations={[percent, percent]}
          style={[styles.item, styles.last, styles.deleteItem]}
        >
          <Text style={[styles.title, {color:'white'}]}>Delete Data</Text>
        </LinearGradient>
        </Animated.View>
      </Pressable>
  );
}

export default function SettingsScreen() {
  const { colors } = useTheme();
  return(
    <ScrollView>
      <Text style={[styles.header, {color:colors.primary}]}>Preferences</Text>
      <ThemeSelector/>
      <NotificationSelector/>
      <DeleteOption/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginLeft:10,
    marginRight:10,
  },
  toggleItem: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  deleteItem:{
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor: 'red',
  },
  switch: {
    margin:10,
    padding: 10,
    paddingTop:2,
    paddingBottom:2,
  },
  header: {
    fontSize: 32,
    padding: 10
  },
  title: {
    fontSize: 24,
    padding:10,
    paddingTop:2,
    paddingBottom:2,
  }, 
  first: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  last: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

});
