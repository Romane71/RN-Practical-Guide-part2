import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MealsOverViewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FavoritesScreen } from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
              headerStyle: {
                backgroundColor: "#351401"},
              headerTintColor: "white",
              contentStyle: {backgroundColor: '#3f2f25'}
      }}>
       
        <Stack.Screen name="Drawer"
         component={DrawerNavigator} 
         options={{
          title: "All Categories"
         }}/>

        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({

});
