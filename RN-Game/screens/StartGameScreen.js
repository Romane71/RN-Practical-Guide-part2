import { TextInput , View, StyleSheet} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";


export function StartGameScreen() {
return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} 
    maxLength={2} 
    keyboardType="number-pad"
    autoCapitalize="none"
    autoCorrect={false}
    />
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
    <PrimaryButton>RESET </PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton>CONFIRM</PrimaryButton>
    </View>
    </View>
    </View>
)
}
const styles = StyleSheet.create({

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: 'bisque',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height:2 },
        shadowRadius: 6,
        shadowOpacity: 0.30
    },
    numberInput: {
   height: 50,
   width: 50,
   fontSize: 32,
   borderBottomColor: 'coral',
   borderBottomWidth: 2,
   color: 'coral',
   marginVertical: 8,
   fontWeight: 'bold',
   textAlign: 'center'

    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1
    }
})