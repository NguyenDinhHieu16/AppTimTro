import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {View, Text, Button, SafeAreaView} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
      
        <SafeAreaView>
                <View>
                <Text>Hello</Text>
                <Button
                    title='Go Back'
                    onPress={() =>
                    navigation.navigate({name:'Login'})
            }
        />
            </View>
            <View> </View>
        </SafeAreaView>
    );
}

export default HomeScreen;