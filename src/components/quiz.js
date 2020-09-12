import React, { useState, useRef , useEffect} from 'react';
import { Text, View } from 'react-native';
import quizQuestions from '../json/quizQuestions';
import QuestionComponent from './questions';
import AnswerComponent from './answers';
import PrevNext from './prevNext.js';
import styles from '../styles/QuizScreenStyle';


const QuizScreen = ({navigation}) => {
    const [qno, setQno] = useState(0);
    const [score, setScore] = useState(0);
    let len = quizQuestions.length;
    const [clr, setClr] = useState('')

    

    const nextQuestion = () => {
        if(qno < len - 1){
            setQno(qno + 1)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.qnoText}>Question No: {qno + 1}</Text>
            <View style={styles.cardStyle}>
                <QuestionComponent ques={quizQuestions[qno]?.question} nextQuestion={nextQuestion} qno={qno} setQno={setQno} setClr={setClr}/>
                <AnswerComponent options={quizQuestions[qno]?.answers} correctAns={quizQuestions[qno]?.correctAnswer} qno={qno} setQno={setQno} len= {len} setScore={setScore} score={score} nextQuestion={nextQuestion} clr={clr}/>
            </View>
                <PrevNext qno={qno} len= {len} score={score} navigation={navigation}/>
        </View>
    )
}

export default QuizScreen;
