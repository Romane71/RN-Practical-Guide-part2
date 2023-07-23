import { Text } from "react-native";
import { StyleSheet } from "react-native";

export function InstructionText({children}) {
    return    <Text style={styles.instructionText}>{children}</Text>
}


const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: 'coral'
       },
})