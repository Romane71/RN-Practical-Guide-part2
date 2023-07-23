import { Image, View, StyleSheet, Text} from "react-native";
import { Title } from "../components/ui/Title";



export function GameOverScreen() {
    return ( <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imageContainer}>
        <Image 
        style={styles.image} 
        source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed
         <Text style={styles.highlight}>X</Text> rounds to guess the number
      <Text style={styles.highlight}>Y</Text>
      </Text>
    </View>
)}

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'khaki',
        overflow: 'hidden',
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%'
    },

    summaryText: {

    }, 
    highlight: {

    }

})