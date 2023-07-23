import { TextInput , View, StyleSheet, Alert} from "react-native";
import { useState } from "react";
import { PrimaryButton } from "../components/ui/PrimaryButton";



export function StartGameScreen({onPickNumber}) {

const [enteredNumber, setEnteredNumber] = useState('');

function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
}

function resetInputHandler() {
    setEnteredNumber('');
}

function confirmInputHandler() {
const chosenNumber = parseInt(enteredNumber);

if (isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber > 99 ) {
    Alert.alert('Invalid numer!', 'Number has to be a number between 1 and 99.', 
    [{ text: 'Ok!', style: 'destructive', onPress: resetInputHandler }]
    );

    // show alert
    return 
}

onPickNumber(chosenNumber);
}


return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} 
    maxLength={2} 
    autoCapitalize="none"
   keyboardType="number-pad"
    autoCorrect={false}
    onChangeText={numberInputHandler}
    value={enteredNumber}
    />
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
    <PrimaryButton onPress={resetInputHandler}>RESET </PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton onPress={confirmInputHandler} >CONFIRM</PrimaryButton>
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