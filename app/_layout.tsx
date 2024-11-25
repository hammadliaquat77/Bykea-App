import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { useColorScheme } from '@/hooks/useColorScheme';
import { _View, Text, View, StyleSheet, Dimensions, Image } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style ={styles.container}>

      {/* header work */}
      <View style={styles.header}>
      <MaterialCommunityIcons name="menu" size={24} color="green" />
      <Text style={styles.logo} >BYKEA</Text>
      <MaterialCommunityIcons name="bell-badge-outline" size={24} color="green" />
     </View>

     {/* Banner Work */}
     <View style={styles.banner}>
       <Image 
         style={styles.bannerImage}
       source={{uri:'data:image/jpeg;base64,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'}}/>
     </View>

     {/* Info View */}
      <View style={styles.infoView}>
      <MaterialIcons name="attach-money" size={24} color="green" />
      <Text style={styles.infoText}>|</Text>
      <MaterialIcons name="message" size={24} color="green" />
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
           <View style={styles.bottomRow}>
            <Card title={'Carpool'} icon={'electric-car'}  bgColor={'#D2F2FD'} 
            image={require('@/assets/images/1.png')}/>
            <Card title={'Ride'} icon={'electric-car'}  bgColor={'#97C79D'} 
            image={require('@/assets/images/2.png')}/>
           </View>

           <View style={styles.bottomRow}>
           <Card title={'Delivery'} icon={'electric-car'}  bgColor={'#FBEAD6'} 
           image={require('@/assets/images/3.png')}/>
           <Card title={'Mobiles'} icon={'electric-car'}  bgColor={'#B2B7EF'} 
           image={require('@/assets/images/4.png')}/>
           </View>

           <View style={styles.bottomRow}>
           <Card title={'Shop'} icon={'electric-car'}  bgColor={'#C9E3FE'} 
           image={require('@/assets/images/5.png')}/>
           <Card title={'Rentals'} icon={'electric-car'}  bgColor={'#FFFEB3'} 
           image={require('@/assets/images/6.png')}/>
           </View>
      </View>


    </View>
  );
}

const Card = ({bgColor, icon, title, image, }) => {
  return <View style={[styles.card, {backgroundColor: bgColor} ]}>
    <Text style={{textAlign:'right'}}>{title}</Text>
    {/* <MaterialIcons name={icon} size={70} color="black" /> */}
    <Image style={{height: 80, width: 'auto', objectFit:'contain', marginLeft: -12}} source={image} />
  </View>
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo:{
    fontWeight:'bold',
    fontSize: 20,
    letterSpacing: 2,
    color: 'green',
  },
  banner:{
    height: SCREEN_HEIGHT / 3.7 ,
    backgroundColor: '#a6c7e2',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  bannerImage:{
    height: '86%',
    borderRadius: 10,
  },
  infoView:{
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: -15,
    elevation: 4,
  },
  infoText:{
    fontSize: 20,
    color: 'green'
  },
  bottomContainer:{
    flex: 1,
    margin: 20,
    gap: 10,    
  },
  bottomRow:{
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    // borderWidth: 1,
    color: 'black',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between'
  }
})
