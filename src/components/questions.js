import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/QuizScreenStyle';

const QuestionComponent = ({ques, nextQuestion, qno, setXyz}) => {

    useEffect(()=>{
       quesTimer()
    },[qno])

    const quesTimer = () => {
        console.log('Calling after 1 min')
        setXyz(setTimeout(() => {nextQuestion()}, 60000))
    }

    return (
        <View style={styles.quesView}>
            <Text style={styles.quesText}>{ques}</Text>
        </View>
    )
}

export default QuestionComponent;