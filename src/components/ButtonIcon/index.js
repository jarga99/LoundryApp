import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconAddSaldo, IconGetPoint, IconKiloan, IconKarpet, IconSatuan, IconVIP, IconSetrika, IconEkspress } from '../../assets'
import { WARNA_SEKUNDER, WARNA_PRIMER } from '../../utils/constans'

const ButtonIcon = ({ title, type }) => {

    const Icon = () => {

        if (title === "Add Saldo") return <IconAddSaldo />

        if (title === "Get Point") return <IconGetPoint />

        if (title === "Kiloan") return <IconKiloan />

        if (title === "Satuan") return <IconSatuan />

        if (title === "VIP") return <IconVIP />

        if (title === "Karpet") return <IconKarpet />

        if (title === "Setrika Saja") return <IconSetrika />

        if (title === "Ekspress") return <IconEkspress />

        return <IconAddSaldo />
    }

    return (
        <TouchableOpacity style={styles.container(type)} >
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon
// penggunaan type layanan digunakan untuk pembeda styling ,
// jika (type) yang di styling itu === "layanan" maka nilainya ? valuenya : value
const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 30 : 0
    }),
    button: (type) => ({
        backgroundColor: type === "layanan" ? WARNA_PRIMER : WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: type === "layanan" ? 20 : 5,
        alignItems: 'center',
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 15 : 12,
        fontFamily: type === "layanan" ? 'TitilliumWeb-Light' : 'TitilliumWeb-regular',
        textAlign: 'center'

    })
})
