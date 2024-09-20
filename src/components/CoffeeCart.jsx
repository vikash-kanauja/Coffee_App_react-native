import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
// import {combineTransition} from 'react-native-reanimated';
// import {Feather} from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
const CoffeeCart = ({cart}) => {
  // console.log(cart.image);

  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartImage}>
        <Image
          // source={require(`${cart.image}`)}
          source={require('../../assets/images/Image.png')}
          style={styles.img}
          resizeMethod="cover"
        />
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.title}>{cart.title}</Text>
        </View>
        <View>
          <Text style={styles.desc}>{cart.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.price}>{cart.price}</Text>
          </View>
          <View style={styles.plusBtnContainer}>
            <TouchableOpacity onPress={''}>
            <Feather name="plus" color={colors.white}  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCart;

const styles = StyleSheet.create({
  cartContainer: {
    width: 170,
    height: 'auto',
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cartImage: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    gap: 5,
  },
  title: {
    fontSize: 23,
    color: colors.black,
    fontFamily: fonts.ExtraBold,
    fontWeight: '500',
  },
  desc: {
    fontSize: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  price: {
    fontFamily: fonts.ExtraBold,
    fontSize: 25,
    color: colors.black,
  },
  plusBtnContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.brown,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: 20,
  },
  plusBtn: {
    // width: '100%',
    height: '100%',
    fontSize: 40,
    // textAlign:'center',
    color: colors.white,
    backgroundColor: 'black',
  },
});
