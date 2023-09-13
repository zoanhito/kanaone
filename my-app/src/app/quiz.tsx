

export interface quizOptions{
    hiragana: boolean,
    katakana: boolean,
    valid: boolean,
}

export interface quizProps {
    quizOptions: quizOptions
}

const Quiz = ({quizOptions}:quizProps) => {
    return(
        <>
            <main className="flex min-h-screen flex-col items-center p-24">
                <div>
                    {quizOptions.hiragana ? "hira selected" : "hira not selected"}
                    {quizOptions.katakana ? "|kata selected" : "|kata not selected"}
                </div>
            </main>
        </>
    )
}

export default Quiz;