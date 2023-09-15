import { buttonType } from "../constants/enums";

export interface buttonProps {
    type: buttonType;
    disabled?: boolean;
    selected: boolean;
    group: number;
    onClick: (arg: any) => any;
}


const ButtonGroup = ({buttonOptions, onClick}:{buttonOptions: any[], onClick: any}) => {
    return(
        <>
            <div className="flex space-x-3 mt-2 mb-2">
                {
                    buttonOptions.map(button => (
                        <Button {...button} key={button.type} onClick={onClick}/>
                    ))
                }
            </div>
        </>
    );
}

const Button = (props:buttonProps) => {
    return(
        <>
            <button 
                type="button"
                onClick={() => props.onClick(props)}
                className={`
                    ${props.selected ? "border-orange-500" : "border-blue-500"} 
                    ${props.disabled ? "opacity-50 cursor-not-allowed" : "hover:border-blue-600 hover:bg-blue-500 hover:text-white"}
                    ${props.type == buttonType.start ? " w-14 rounded-full" : "w-28"}
                    tracking-wide shadow-md py-2 inline-flex items-center text-center
                    bg-white rounded border-b-2 border-blue-500 
                    text-gray-800 font-bold 
                `}>
                    
                {props.type == buttonType.start ? <StartSvg/>:
                    <span className="mx-auto">
                            {props.type}
                    </span>
                    }
            </button>
        </>
    )
}

export const StartSvg = () => {
    return (
        <svg className="fill-current w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path stroke="#3b82f6" d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"/>
        </svg>
    )
}

export default ButtonGroup;