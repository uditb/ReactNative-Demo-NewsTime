import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        console.log("SetData == " + key, value);

        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        alert(e);
    }
}



export const getData = async (key) => {
    let value = '';
    try {
        value = await AsyncStorage.getItem(key) || '';
        console.log("GetData == " + key, value);
        console.log("GetData value == " + value);

    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
    return value;
}