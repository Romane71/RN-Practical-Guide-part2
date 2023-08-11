import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from 'react-native'


export function CategoriesScreen({navigation}) {
function renderCategoryItem(itemData) {
    function PressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id,
        });
    }

    return (
    <CategoryGridTile 
     title={itemData.item.title} 
     color={itemData.item.color} 
     onPress={PressHandler}
  
     />

    );
}
    return ( <FlatList
     data={CATEGORIES} 
    keyExtractor={(item) => item.id}  
    renderItem={renderCategoryItem}
    numColumns={2}/>
    );
}