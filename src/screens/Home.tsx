import { Pressable, StyleSheet, FlatList, View } from 'react-native';
//FOR THE NAVIGATION
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
//COMPONENTS
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';
//DATA
import { PRODUCTS_LIST } from '../data/constans';


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
            <Pressable
                onPress={() => { 
                    navigation.navigate("Details", {
                        product: item
                    })
                }}    
            >
                <ProductItem product={item}/>
            </Pressable>
        )}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});


export default Home;