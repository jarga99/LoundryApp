import React from 'react'
import { Dimensions, ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ImageHeader, Logo } from '../../assets'
import { PesananAktif, Saldo } from '../../components'
import ButtonIcon from '../../components/ButtonIcon'
import { WARNA_DASAR } from '../../utils/constans'

const Home = () => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={ImageHeader} style={styles.header}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.hello}>
                        <Text style={styles.selamat}>Selamat Datang,</Text>
                        <Text style={styles.user}>Nama Pengguna </Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami</Text>
                    <View style={styles.iconLayanan}>
                        <ButtonIcon title="Kiloan" type="layanan" />
                        <ButtonIcon title="Satuan" type="layanan" />
                        <ButtonIcon title="VIP" type="layanan" />
                        <ButtonIcon title="Karpet" type="layanan" />
                        <ButtonIcon title="Setrika Saja" type="layanan" />
                        <ButtonIcon title="Ekspress" type="layanan" />
                    </View>
                </View>
                <View style={styles.pesananAktif}>
                    <Text style={styles.label}>Pesanan Aktif</Text>
                    <PesananAktif title="Pesanan No.0001" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No.0002" status="Sudah Selesai" />
                    <PesananAktif title="Pesanan No.0003" status="Masih Dicuci" />
                    <PesananAktif title="Pesanan No.0004" status="Masih Dicuci" />
                </View>
            </ScrollView>

        </View>
    );
};

export default Home
//Penggunaan windowWidth & windowHeight
//mengatur dimensi lebar dan tinggi layar agar dapat 
//responsive sesuai layar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//jika ingin ukuran pas, jika ingin menentukan lebar icon
//caranya wi/wl : hi/hl 
//w = width : h= height 
//i = icon : l = layar
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {

        width: windowWidth,
        height: windowHeight * 0.3, //satuan persen(%)
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {

        width: windowWidth * 0.35,
        height: windowHeight * 0.09,

    },
    hello: {
        marginTop: windowHeight * 0.0

    },
    selamat: {
        fontSize: 26,
        fontFamily: 'TitilliumWeb-Regular'
    },
    user: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 10
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    iconLayanan: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        flexWrap: 'wrap'

    },
    pesananAktif: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: WARNA_DASAR,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    }

});
