import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MealsOverViewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#351401"
              },
              headerTintColor: "white",
              contentStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen name="MealsCategories"
         component={CategoriesScreen} 
         options={{
          title: "All Categories",
          headerStyle: {
            backgroundColor: "#351401"
          },
          headerTintColor: "white",
          contentStyle: {backgroundColor: '#3f2f25'}
         }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}
       
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
      </Stack.Navigator>

  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({

});
