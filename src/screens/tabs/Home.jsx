// import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
// import React, {useState} from 'react';
// import {colors} from '../../utils/colors';
// import SearchBox from '../../components/SearchBox';
// import PromoCart from '../../components/PromoCart';
// import CoffeeCart from '../../components/CoffeeCart';
// import cartData from '../../../assets/jsonData/coffeeCartJson.json';
// import {combineTransition} from 'react-native-reanimated';
// import Categories from '../../components/Categories';

// const Home = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('java'); // const data = [
//   //   {key: '1', value: 'Mobiles', disabled: true},
//   //   {key: '2', value: 'Appliances'},
//   //   {key: '3', value: 'Cameras'},
//   //   {key: '4', value: 'Computers', disabled: true},
//   //   {key: '5', value: 'Vegetables'},
//   //   {key: '6', value: 'Diary Products'},
//   //   {key: '7', value: 'Drinks'},
//   // ];

//   return (
//     <SafeAreaView style={styles.containerpp}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.homeSection}>
//           <View style={styles.topSection}>
//             <Text style={styles.locationTxt}>Location</Text>
//             <View style={styles.selectBox}>
//               <Text style={styles.selectBoxTxt}>Bilzen, Tan jungbali</Text>

//               {/*<Picker
//             selectedValue={selectedLanguage}
//             onValueChange={itemValue => setSelectedLanguage(itemValue)}
//             style={styles.picker}>
//             <Picker.Item label="Java" value="java" />
//             <Picker.Item label="JavaScript" value="javascript" />
//             <Picker.Item label="Python" value="python" />
//             <Picker.Item label="C++" value="cpp" />
//           </Picker>*/}
//             </View>
//             <SearchBox />
//             <View style={styles.promo}>
//               <PromoCart />
//             </View>
//           </View>
//           <View style={styles.bottomSection}>
        
//             <Categories/>
            
//             <View style={styles.cartMain}>
//               {cartData.map((cart, index) => {
//                 return <CoffeeCart key={index} cart={cart} />;
//               })}
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   homeSection: {
//     flex: 1,
//   },
//   topSection: {
//     // flex: 1 / 3,
//     height:350,
//     backgroundColor: colors.black,
//     paddingVertical: 50,
//     paddingHorizontal: 30,
//   },
//   bottomSection: {
//     paddingTop: 40,
//     marginTop: 50,
//     // backgroundColor:'#f9f9f9'
//   },
//   locationTxt: {
//     color: colors.secondary,
//     fontSize: 20,
//     marginVertical: 10,
//   },
//   selectBox: {
//     color: colors.gray,
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   selectBoxTxt: {
//     fontSize: 22,
//     color: colors.gray,
//     fontWeight: '600',
//   },
//   promo: {
//     width: '100%',
//     position: 'absolute',
//     bottom: -80,
//     alignSelf: 'center',
//   },
//   cartFilter:{
//   width:'100%',
//   height:80,
//   },
//   cartMain: {
//     width: '100%',
//     gap:10,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     padding:20
//   },
//   categories:{
//     backgroundColor:"yellow",
//     width:'100%',
//     height:40
//   }
// });



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Other1" component={OtherScreen1} />
      <Tab.Screen name="Other2" component={OtherScreen2} />
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})