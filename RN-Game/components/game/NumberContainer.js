import { Text, View, StyleSheet } from "react-native";


export function NumberContainer({children}) {

return <View style={styles.container}>
<Text style={styles.numberText}>{children}</Text>
</View>
}


const styles = StyleSheet.create({
    container: {
    borderWidth: 4,
    borderColor: 'khaki',
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'

    },
    numberText: {
    color: 'khaki',
    fontSize: 36,
    fontWeight: 'bold'

    }
})