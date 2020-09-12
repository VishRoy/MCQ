import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/QuizScreenStyle';
import CountDown from 'react-native-countdown-component';

const AnswerComponent = ({ options, qno, len, correctAns, setScore, score, nextQuestion, clr }) => {
    const [dis, setDis] = useState(false)
    const [selectedKey, setSelectedKey] = useState('');

    const fiveSecTimer = (value, key) => {
        fiveSecWork(value, key)
        if (qno < len) {
            setDis(true)
            setTimeout(() => { call() }, 5000)
        } else {
            setDis(true)
        }
    }

    const fiveSecWork = (value, key) => {
        setSelectedKey(key)
        if (value === correctAns) {
            setScore(score + 1)
        }
    }

    const call = () => {
        setDis(false)
        setSelectedKey('')
        nextQuestion() 
        clearTimeout(clr);
    }


    return (
        <View>
            {options?.map((option) => {
                return <View key={option.key} style={styles.ansView}>
                    <TouchableOpacity onPress={() => fiveSecTimer(option.content, option.key)} disabled={dis}>
                        <Text style={option.key === selectedKey ? styles.ansTextSelected : styles.ansText}>{option.key}. {option.content}</Text>
                    </TouchableOpacity>
                </View>
            })}
           { selectedKey !== '' ? <CountDown
                until={5}
                size={20}
                style={{paddingTop: 10}}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#6ab04c' }}
                timeToShow={['M', 'S']}
                timeLabels={{ m: 'MM', s: 'SS' }}
            /> : null}
        </View> 
    )
}

export default AnswerComponent;