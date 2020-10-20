import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { Logo, SplashBackground } from '../../assets'

//set time splashcreen sebelum masuk ke beranda
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            //maksudnya adalah menimpa splascreen dengan MainApp agar 
            //tidak kembali ke Splashscreen saat di back
            navigation.replace('MainApp');
        }, 3000)//hitungan waktu splashcreen dimunculkan
    }, [navigation]);

    //set design Splashscreen
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

//mengatur style pada background
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 333,
        height: 150
    }
})
