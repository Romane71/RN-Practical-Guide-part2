
import { StyleSheet, View , ImageBackground} from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';



export default function App() {

 const [ userNumber, setUserNumber] = useState();

 function pickedNumberHandler(pickedNumber) {

    setUserNumber(pickedNumber)
  }

 
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground source={require('../RN-Game/assets/images/background.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
    
      >
     {screen}
    </ImageBackground>
   </View>
  )
}


const styles = StyleSheet.create({
rootScreen: {
  flex:1,
  backgroundColor: 'coral'
},

})

