import { useState } from "react";
import { FullKanaKey, Hira } from "./constants/constants";
import ButtonGroup from "./components/button";
import { buttonType } from "./constants/enums";

export interface quizOptions{
    hiragana: boolean,
    katakana: boolean,
    dakuten: boolean,
    combo: boolean,
    random: boolean,
    quizList: string[],
}

export interface quizProps {
    quizOptions: quizOptions
}

const Quiz = ({quizList, onClick}:{quizList: string[], onClick: (arg:any) => void}) => {
    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [mistakeCount, setMistakeCount] = useState(0);

    const homeButton = {
        type: buttonType.home, 
        disabled: false,
        selected: false,
    }

    return(
        <>
            <div className="flex min-h-screen place-content-center p-20 ">
                <div className={` ${error ? "border-red-400 animate-wiggle" : "border-gray-200"}
                                    min-w-max m-auto h-full w-fit max-w-lg 
                                  bg-white border-4  rounded-lg shadow `}>
                    <div className="px-8 pb-4 pt-4  w-72">
                        {
                            done ? 
                                <>
                                    <h1 className="text-center mb-4 mt-4 text-6xl font-extrabold leading-none tracking-tight text-black-500">
                                        {"Results"}
                                    </h1>
                                    <h2 className="text-center mb-2 font-medium">
                                        {quizList.length - mistakeCount + "/" + quizList.length + " Correct"}
                                    </h2>
                                </>
                            :
                                <>  <h1 className="text-center font-small mb-4">
                                        {index+1 + "/" + quizList.length}
                                    </h1>
                                    <h2 className="text-center mb-4 text-8xl font-extrabold leading-none tracking-tight text-blue-500">
                                        {quizList[index]}
                                    </h2>
                                </>
                        }
                        { !done ?
                            <input 
                                type="text"
                                className={` ${error ? " border-red-500" : " focus:border-blue-500"}
                                bg-gray-50 border-2  text-gray-900  border-gray-300
                                text-md rounded-lg  focus:outline-none   block m-auto  w-24 p-2 text-center`}
                                value={input}
                                spellCheck={false}
                                onChange={(e) => {
                                    setInput((e.target as HTMLInputElement).value);
                                    setError(false);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        if(index === quizList.length - 1){
                                            setDone(true);
                                        }

                                        if(FullKanaKey[quizList[index]] !== input.trim().toLocaleLowerCase()){
                                            if(!error){
                                                setMistakeCount(count=>count+1);
                                            }   
                                            setError(true);
                                        } else {
                                            setError(false);
                                            setIndex(index=>index+1);
                                            setInput('');
                                        }
                                    }
                            }}/>
                            : 
                            <div className="flex flex-col items-center mb-4">
                                <ButtonGroup buttonOptions={[homeButton]} onClick={onClick}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz;