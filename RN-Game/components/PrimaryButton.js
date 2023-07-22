import { View, Text,Pressable, StyleSheet} from 'react-native'


export function PrimaryButton({children, onPress}) {
   
return (
    <View style={styles.buttonOuterContainer}>
    <Pressable 
    style={({pressed}) => pressed ? [styles.buttonInerContainer, styles.pressed] 
    : styles.buttonInerContainer}
 onPress={onPress} 
 android_ripple={{color: 'coral'}}
 
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
    backgroundColor: 'coral',
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