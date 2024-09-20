import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const PromoCart = () => {
  return (
    <View style={styles.promoContainer}>
      <ImageBackground
        source={require('../../assets/images/promoBanner.png')}
        resizeMode="cover"
        style={styles.promoImg}>
        <View style={styles.promotxtContainer}>
        <View style={styles.promoBtn}>
            <Text style={styles.promoTxt}>Promo</Text>
        </View>
          <Text style={styles.promoTitle}>Buy one get{'\n'} one FREE</Text>
          
        </View>
      </ImageBackground>
    </View>
  );
};

export default PromoCart;

const styles = StyleSheet.create({
  promoContainer: {
    width: '100%',
    height: 170,
    // backgroundColor: 'yellow',
    borderRadius:15,
    overflow:"hidden"
    // paddingHorizontal:20
  },
  promoImg: {
    flex: 1,
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 40,
    fontFamily: fonts.Bold,
    color: colors.white,
    fontWeight: '600',
    // backgroundColor:colors.black
  },
  promotxtContainer:{
    paddingVertical:10,
    paddingHorizontal:20,
  },
  promoBtn:{
    justifyContent:"center",
    alignItems:'center',
    width:80,
    height:35,
    borderRadius:10,
    textAlign:'center',
    // padding:10,
    backgroundColor:"#ed5151"
  },
  promoTxt:{
    fontSize:20,
    fontWeight:'800',
    color:colors.white
  }
});
