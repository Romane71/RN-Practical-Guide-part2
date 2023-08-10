

import { StyleSheet, Text, Platform } from "react-native"

export function Title({children}) {

    return  <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({

title: {
    fontSize: 24,
    //fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  //  borderWidth: Platform.OS === 'android' ? 2 : 0,
  //borderWidth: Platform.select({ios: 0, android: 2 }),
  borderWidth: 2,
    borderColor: 'khaki',
    padding: 12,
    maxWidth: '80%',
    width: 300
}
})