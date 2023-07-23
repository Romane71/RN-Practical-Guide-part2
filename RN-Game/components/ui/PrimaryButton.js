import { View, Text,Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';


export function PrimaryButton({children, onPress}) {
   
return (
    <View style={styles.buttonOuterContainer}>
    <Pressable 
    style={({pressed}) => pressed ? [styles.buttonInerContainer, styles.pressed] 
    : styles.buttonInerContainer}
 onPress={onPress} 
 android_ripple={{color: Colors.primary500}}
 
 >
    <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
</View>
)}


const styles = StyleSheet.create({
    buttonOuterContainer: {
  borderRadius: 28,
  margin: 4,
  overflow: 'hidden'

    },

buttonInerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
},

buttonText: {
    color: 'white',
    textAlign: 'center'
},

pressed: {
    opacity: 0.75
}

})