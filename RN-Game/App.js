
import { StyleSheet, View , ImageBackground} from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';



export default function App() {
  return (
    <View style={styles.rootScreen}>
      <ImageBackground source={require('../RN-Game/assets/images/background.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
    
      >
    <StartGameScreen />
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

