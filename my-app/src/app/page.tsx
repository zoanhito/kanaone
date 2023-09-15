"use client";

import { useState } from "react";
import Quiz, { quizOptions } from "./quiz";
import Home from "./home";
import { buttonType } from "./constants/enums";
import { ComboHira, ComboKata, DakutenComboHira, DakutenComboKata, DakutenHira, DakutenKata, Hira, Kata } from "./constants/constants";
import { buttonProps } from "./components/button";

const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
};

export default function App() {
    const [startQuiz, setStartQuiz] = useState(false);

    const defaultQuizOptions: quizOptions = {
        hiragana:false,
        katakana:false,
        dakuten:false,
        combo:false,
        random:false,
        quizList: [],
    }
    const [quizOptions, setQuizOptions] = useState(defaultQuizOptions);

    const buildQuizList = () => {
        var newQuizList:string[] = [];
        if(quizOptions.random){
            newQuizList = newQuizList.concat(Object.values(Hira), Object.values(DakutenHira), Object.values(DakutenComboHira), Object.values(ComboHira));
            newQuizList = newQuizList.concat(Object.values(Kata), Object.values(DakutenKata), Object.values(DakutenComboKata), Object.values(ComboKata));
            newQuizList = shuffle(newQuizList);
            newQuizList = newQuizList.slice(0, 20);
        } else {
            if(quizOptions.hiragana){
                //append hiragana
                newQuizList = newQuizList.concat(Object.values(Hira));
                if(quizOptions.dakuten){
                    //append hiragana + dakuten
                    newQuizList = newQuizList.concat(Object.values(DakutenHira));
                    if(quizOptions.combo){
                        //append hiragana + dakuten + combo
                        newQuizList = newQuizList.concat(Object.values(DakutenComboHira));
                    }
                }

                if(quizOptions.combo){
                    newQuizList = newQuizList.concat(Object.values(ComboHira));
                }
            }

            if(quizOptions.katakana){
                //append katakana
                newQuizList = newQuizList.concat(Object.values(Kata));
                if(quizOptions.dakuten){
                    //append katakana + dakuten
                    newQuizList = newQuizList.concat(Object.values(DakutenKata));
                    if(quizOptions.combo){
                        //append katakana + dakuten + combo
                        newQuizList = newQuizList.concat(Object.values(DakutenComboKata));
                    }
                }

                if(quizOptions.combo){
                    //append combo
                    newQuizList = newQuizList.concat(Object.values(ComboKata));
                }
            }
        }

        setQuizOptions(prev => ({
            ...prev, 
            quizList: shuffle(newQuizList),
        }));

        return newQuizList.length > 0;
    }

    const onClick = (btn:buttonProps) => {
        switch (btn.type){
            case buttonType.start:{
                if(buildQuizList() && !btn.disabled){
                    setStartQuiz(true);
                }
                break;
            }
            case buttonType.all:{
                if(!btn.selected){
                    setQuizOptions(prev => ({
                        ...prev, 
                        hiragana: true,
                        katakana: true,
                        dakuten: true,
                        combo: true,
                        random: false,
                    }));
                } else {
                    setQuizOptions(defaultQuizOptions);
                }
                break;
            }
            case buttonType.random:{
                if(!btn.selected){
                    setQuizOptions(prev => ({
                        ...prev, 
                        random: !btn.selected,
                        hiragana: false,
                        katakana: false,
                        dakuten: false,
                        combo: false,
                    }));
                } else {
                    setQuizOptions(defaultQuizOptions);
                }
                break;
            }
            case buttonType.home:{
                setStartQuiz(false);
                setQuizOptions(defaultQuizOptions);
                break;
            }
        }

        setQuizOptions(prev => ({
            ...prev, 
            hiragana: btn.type === buttonType.hira ? !prev.hiragana : prev.hiragana,
            katakana: btn.type === buttonType.kata ? !prev.katakana : prev.katakana,
            dakuten: btn.type === buttonType.daku ? !prev.dakuten : prev.dakuten,
            combo: btn.type === buttonType.combo ? !prev.combo : prev.combo,
        }));

    }

    return (
        <>
            {startQuiz ? <Quiz quizList = {quizOptions.quizList} onClick={onClick}/> : <Home onClick={onClick}/>}
        </>
    )
}
