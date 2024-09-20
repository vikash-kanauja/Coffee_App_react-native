import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utils/colors';

const SearchBox = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        {/*<Icon name="search" size={20} color="#888" style={styles.iconStyle} />*/}
        <View style={{padding:5}}><Image source={require('../../assets/logos/Search.png')}  /></View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.filterBtn}>
        <TouchableOpacity>
          <Image source={require('../../assets/logos/filterLogo.png')} style={styles.filterImg} resizeMode="cover"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    // backgroundColor:'pink'
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlack,
    borderRadius: 15,
    padding: 5,
    marginVertical: 20,
    alignItems: 'center',
    width: '78%',
  },
  iconStyle: {
    marginRight: 10, // Space between icon and input text
  },
  inputStyle: {
    flex: 1, // TextInput takes full remaining width
    fontSize: 16, // Font size for input text
  },
  filterBtn: {
    backgroundColor: colors.brown,
    justifyContent:'center',
    alignItems:'center',
        borderRadius: 15,
    width:60,
    height:60,
    padding:5
  },
  filterImg:{
    // width:50,
    // height:50,
  }
});

export default SearchBox;
