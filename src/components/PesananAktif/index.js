import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconPesananAktif } from '../../assets'
import { WARNA_DASAR, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constans'

const PesananAktif = ({ title, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconPesananAktif />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 7,
        marginVertical: windowHeight * 0.01,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth * 0.02
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_DASAR,
    })
})
