import {StyleSheet} from 'react-native';

const ScoreCardScreenStyle = StyleSheet.create({ 
   scoreCardView : {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        borderColor: '#6ab04c', 
        borderWidth: 1, 
        borderRadius: 2.5,
   },
   scoreCardText: {
        color:'#6ab04c', 
        fontSize: 22, 
        padding: 20,
        textAlign:'center'
   }
})

export default ScoreCardScreenStyle;