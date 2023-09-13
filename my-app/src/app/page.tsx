"use client";

import { useState } from "react";
import Quiz, { quizOptions } from "./quiz";
import Home from "./home";
import { buttonType } from "./components/button";

export default function App() {
    const [startQuiz, setStartQuiz] = useState(false);

    const defaultQuizOptions: quizOptions = {
        hiragana:false,
        katakana:false,
        valid: false
    }
    const [quizOptions, setQuizOptions] = useState(defaultQuizOptions);


    const OnClick = (type:buttonType) => {
        switch (type){
            case buttonType.start:{
                setStartQuiz(true);
                break;
            }
            case buttonType.all:{
                setQuizOptions(prev => ({...prev, hiragana: !prev.hiragana, katakana: !prev.katakana}));
                break;
            }
            case buttonType.hira:{
                setQuizOptions(prev => ({...prev, hiragana: !prev.hiragana}));
                break;
            }
            case buttonType.kata:{
                setQuizOptions(prev => ({...prev, katakana: !prev.katakana}));
                break;
            }
            case buttonType.random:{
                break;
            }
        }
    }

    return (
        <>
            {startQuiz ? <Quiz quizOptions = {quizOptions}/> : <Home OnClick={OnClick}/>}
        </>
    )
}
