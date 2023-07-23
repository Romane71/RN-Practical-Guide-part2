
import { StyleSheet, View , ImageBackground, SafeAreaView} from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';



export default function App() {

 const [ userNumber, setUserNumber] = useState();
const [ gameIsOver, setGameIsOver] = useState(true)

 function pickedNumberHandler(pickedNumber) {

    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }


  function gameOverHandler() {
    setGameIsOver(true)
  }
 
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen =  ( <GameScreen  userNumber={userNumber} onGameOver={gameOverHandler}/>
    );
  }

if (gameIsOver && userNumber) {
  screen = <GameOverScreen /> 
}


  return (

    <View style={styles.rootScreen}>
      <ImageBackground source={require('../RN-Game/assets/images/background.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
    
      >
     <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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

