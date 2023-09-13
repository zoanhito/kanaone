
export const enum buttonType{
    hira = "Hiragana",
    kata = "Katakana",
    daku = "Dakuten",
    combo = "Combo",
    all = "All Kana",
    random = "Random",
    start = "Start",
}

export interface buttonProps {
    type: buttonType;
    disabled?: boolean;
    selected: boolean;
    group: number;
    onClick: (arg: any) => any;
}


const ButtonGroup = (props:buttonProps) => {
    return(
        <>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button {...props}/>
            </div>
        </>
    );
}

const Button = (props:buttonProps) => {
    return(
        <>
            <button 
                type="button"
                className={ 
                    `${props.selected ? "border-orange-500 text-orange-500 " : "border-blue-500 text-blue-500"} 
                    ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
                     w-72 text-center bg-transparent hover:bg-blue-500 font-sans hover:text-white py-1 mr-8 mb-8  border-4  rounded-lg  text-4xl h-28`}
                onClick={() => props.onClick(props)}
                >
                    {props.type == buttonType.hira ? "あ/" + props.type :
                    props.type == buttonType.kata ? "ア/" + props.type : props.type}
            </button>
        </>
    )
}

export default Button;