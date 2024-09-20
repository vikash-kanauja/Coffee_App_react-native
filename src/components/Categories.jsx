// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// import { colors } from '../utils/colors';
// const Categories = () => {
// //   console.log(COFFEE_CATEGORIES, 'from constant');
//  const COFFEE_CATEGORIES = [
//     {
//       id: 1,
//       name: 'Espresso',
//     },
//     {
//       id: 2,
//       name: 'Cappuccino',
//     },
//     {
//       id: 3,
//       name: 'Latte',
//     },
//     {
//       id: 4,
//       name: 'Americano',
//     },
//     {
//       id: 5,
//       name: 'Mocha',
//     },
//     {
//       id: 6,
//       name: 'Macchiato',
//     },
//     {
//       id: 7,
//       name: 'Flat White',
//     },
//     {
//       id: 8,
//       name: 'Irish Coffee',
//     },
//     {
//       id: 9,
//       name: 'Affogato',
//     },
//     {
//       id: 10,
//       name: 'Café au Lait',
//     },
//   ];

//   return (
//     <FlatList
//       horizontal={true}
//       data={COFFEE_CATEGORIES}
//       keyExtractor={item => item.id}
//       contentContainerStyle={{}}
//       renderItem={item => {
//         // <TouchableOpacity>
//         <Text style={styles.CategoriesTxt}>{item.item.name}</Text>;
//         console.log(item.item.name,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

//         // </TouchableOpacity>
//       }}
//     />
//   );
// };

// export default Categories;

// const styles = StyleSheet.create({
//     CategoriesTxt:{
//         color:colors.black,
//         backgroundColor:'red'
//     }
// });

import React from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COFFEE_CATEGORIES} from '../utils/constants';
import {colors} from '../utils/colors';
const data = [
  {id: '1', content: 'Item 1'},
  {id: '2', content: 'Item 2'},
  {id: '3', content: 'Item 3'},
  // ...
];

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.categorie}>
    <Text  style={styles.categorieTxt}>{item.name}</Text>
  </TouchableOpacity>
);

const Categories = () => (
  // console.log(COFFEE_CATEGORIES)

  <FlatList
    horizontal={true}
    data={COFFEE_CATEGORIES}
    contentContainerStyle={{
      // backgroundColor: 'pink',
      gap:20,
      padding:10,
      marginVertical:20
    }}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);

export default Categories;

const styles = StyleSheet.create({
  categorie: {
    backgroundColor:'#f5f5f5',
    padding:8,
    borderRadius:8,

  },
  categorieTxt:{
    color:colors.black,
    fontWeight:'500',
    fontSize:20
  }
});
