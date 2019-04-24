import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        alert(e);
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            // value previously stored
            return value;
        }
    } catch (e) {
        // error reading value
        alert(e);
    }
}