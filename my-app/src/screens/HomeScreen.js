import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, SafeAreaView, Button } from 'react-native'

const HomeScreen = () => {

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        
        <ImageBackground
                source={require('../../assets/backgroundLogin.jpg')}
                style={styles.backgroundImage}
        >
            <SafeAreaView>
            <View style={{top: 50, alignItems: 'center'}}>
                <Image source={require('../../assets/cicrle.png')} style={styles.img} />
                <Text style={styles.header}>WellCome Back</Text>
                <View style={styles.form}>

                    <TextInput 
                        style={styles.userName}
                        value={userName}
                        onChangeText={setUserName}
                        placeholder='Số di động hoặc email'
                    />

                    <TextInput 
                        style={styles.userName}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Mật Khẩu'
                    />              
                </View>
                <View style={styles.btnLogin}>
                    <Button
                        
                        // onPress={onPressLearnMore}
                        title="Đăng nhập"
                        color="#fff"
                        // accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={styles.quenMK}
                        title='Bạn quên mật khẩu ư?'
                        color='black'
                    />
                </View>
                
            </View>
            </SafeAreaView>
            <View style={{alignItems:'center'}}>
                <View style={styles.newAcC}>
                        <Button
                            title='Tạo tài khoản mới'
                            color='#007AFF'
                        />
                </View>
            </View>
            
        </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create ({
    container: {   

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    img: {
        height: 200,
        width: 200,
    },
    form: {
        flexDirection: 'column',
        width: '90%',
    },
    userName: {
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#A0A0A0',
        fontSize: 20,
        padding: 10,
        margin: 20,
    },
    btnLogin: {
        marginVertical: 10,
        backgroundColor: '#007AFF',
        width: '80%',
        borderRadius: 20,
    },
    newAcC: {
        backgroundColor: '#E6E6E6',
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 20,
        width: '80%',
        marginBottom: 30,
        padding: 3,
    }
})