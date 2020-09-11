import {StyleSheet} from 'react-native';

const WelcomeScreenStyle = StyleSheet.create({ 
    container: {
        flex: 1 , justifyContent: 'center',alignItems:'center', padding:20
      },
    welcomeText: {
        fontSize: 24,
        fontWeight:'bold',
        textDecorationLine:'underline',
        color: '#6ab04c'
    },
    instructionsContainer: {
        flexDirection:'column',
        padding: 20
    },
    instructionsText: {
        fontSize: 20,
        paddingBottom: 10,
        color: '#6ab04c'
    },
    textStyle: {
        paddingBottom: 10
    },
    startButton : {
        padding:10,backgroundColor: '#6ab04c',borderColor: '#6ab04c',
    },
    startText : {
        color: '#fff', fontWeight:'bold'
    }
})

export default WelcomeScreenStyle;