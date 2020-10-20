import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constans'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo : </Text>
                    <Text style={styles.valueSaldo}>Rp. 100.000 </Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelPoint}>Antar Point : </Text>
                    <Text style={styles.valuePoint}> 100 Point</Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                <ButtonIcon title="Add Saldo" />
                <Gap width={10} />
                <ButtonIcon title="Get Point" />
            </View>
        </View>
    );
};

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: - windowHeight * 0.07,
        flexDirection: 'row'

    },
    informasiSaldo: {
        width: '60%',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5
    },
    labelSaldo: {
        fontFamily: 'TitilliumWeb-regular',
        fontSize: 20
    },
    valueSaldo: {
        fontFamily: 'TitilliumWeb-Bold',
        fontSize: 20
    },
    labelPoint: {
        fontFamily: 'TitilliumWeb-regular',
        fontSize: 14
    },
    valuePoint: {
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Bold',
        color: WARNA_UTAMA
    },
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }


});
