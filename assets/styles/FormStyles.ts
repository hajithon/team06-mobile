import { StyleSheet } from "react-native";
import { mainLightThemeColor, mainThemeColor, veryDarkGery } from "./RawColors";

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
    prompt: {
        color: 'black',
        fontSize: 40,
    },
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 50,
        flexDirection: 'row',
        backgroundColor: mainThemeColor, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    buttonSecondType: {
        borderRadius: 10,
        margin: 5,
        backgroundColor: mainLightThemeColor,
        textAlign: 'center',
        padding: 10,
        borderColor: mainThemeColor,
        borderWidth: 3,
        flex: 1
    },
    buttonSecondDisabled: {
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#ccc',
        textAlign: 'center',
        padding: 10,
        flex: 1,
        borderWidth: 3,
        borderColor: 'transparent'
    },
    buttonSecondText: {
        color: mainThemeColor,
        textAlign: 'center',
        fontSize: 18
    },
    buttonGoogle: {
        marginTop: 10,
        height: 'auto',
        flexDirection: 'row',
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'blue',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    buttonTextGoogle: {
        paddingLeft: 50,
        color: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'white',
    },
    checkContainer: {
        height: 100,
        marginBottom: 40
    },
    checkCenteredText: {
        padding: 'auto',
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 10,
        borderBottomWidth: 0
    },
    topInput: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10
    },
    bottomInput: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    errorText: {
        color: mainThemeColor
    },
    registerRecommendation: {
        marginTop: 50,
    },
    registerRecommendationText: {
        color: veryDarkGery,
        textDecorationLine: "underline"
    },
    error: { 
        borderColor: 'red', 
        borderBottomWidth: 1 
    },
    registerAuthButton: {
        backgroundColor: mainThemeColor,
        borderTopRightRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        padding: 10
    }
});

export default styles;