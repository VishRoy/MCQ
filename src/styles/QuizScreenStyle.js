import {StyleSheet} from 'react-native';

const QuizScreenStyle = StyleSheet.create({ 
   container: {
       width: '90%',
       height: '50%',
       padding: 10,
       flex: 1,
       justifyContent:'center',
       alignSelf:'center',
   },
   cardStyle: {
    borderWidth: 0.5,
    borderColor: '#6ab04c',
    borderRadius:2,
    padding: 20  
   },
   qnoText:{
        paddingBottom: 20, fontSize: 20, fontWeight:'400'
   },
   quesView: {
        paddingBottom: 25,
   },
   quesText: {
        fontSize: 20, 
        fontWeight: '600', 
        color: '#6ab04c',
   },
   ansView: {
        paddingBottom: 10,
   },
   ansText: {
        fontSize: 15,
   },
   ansTextSelected: {
       fontWeight:'600',
       fontSize: 16,
       color: '#6ab04c',
   },
   submitButton:{
    borderColor: '#6ab04c', borderWidth: 1, borderRadius: 2.5
   },
   submitText:{
    fontSize: 20, fontWeight: '600', color: '#6ab04c', padding: 10, textAlign:'center'
   },
   submitView: {
    paddingTop: 50, 
    justifyContent:'center', 
    alignSelf:'center'
   }
})

export default QuizScreenStyle;