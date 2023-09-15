
import { useState } from "react";
import ButtonGroup, { buttonProps } from "./components/button";
import { buttonType } from "./constants/enums";

interface homeProps {
    onClick: (arg: any) => any;
}

const Home = ({onClick}: homeProps) => {


    const defaultbuttonOptions = [
        {
            type: buttonType.all, 
            disabled: false,
            selected: false,
            group: 1,
        },
        {
            type: buttonType.random, 
            disabled: false,
            selected: false,
            group: 1,
        },
        {
            type: buttonType.hira, 
            disabled: false,
            selected: false,
            group: 2,
        },
        {
            type: buttonType.kata, 
            disabled: false,
            selected: false,
            group: 2,
        },
        {
            type: buttonType.daku, 
            disabled: true,
            selected: false,
            group: 3,
        },
        {
            type: buttonType.combo, 
            disabled: true,
            selected: false,
            group: 3,
        },
        {
            type: buttonType.start, 
            disabled: true,
            selected: false,
            group: 4,
        }
    ];

    const [buttonOptions, setButtonOptions] = useState(defaultbuttonOptions);

    const homeOnClick = (btn:buttonProps) => {
        if(btn.disabled){
            return;
        }
        
        const checkForAllSelected = () => {
            var count = 0;
            buttonOptions.forEach(x => (
                (x.type === buttonType.kata || x.type === buttonType.hira || x.type === buttonType.daku || x.type === buttonType.combo) && x.selected ? count++ : {}
            ));
            return count == 3;
        }

        const toggleSelected = (type: buttonType) => {
            var newOptions = btn.selected ? 
            buttonOptions.map(x => (
                x.type === type || x.type === buttonType.all ? {...x, selected: !btn.selected} : {...x}
            ))
            : checkForAllSelected() ? 
            buttonOptions.map(x => (
                x.type === type || x.type === buttonType.all ? {...x, selected: true} : {...x}
            ))
            : buttonOptions.map(x => (
                x.type === type ? {...x, selected: !btn.selected} : {...x}
            ));

            const checkIfComboDakuShouldBeDisabled = () => {
                var count = 0;
                newOptions.forEach(x => (
                    (x.type == buttonType.kata || x.type == buttonType.hira ) && x.selected ? count++ : {}
                ));
                return count < 1;
            }
    
            newOptions = checkIfComboDakuShouldBeDisabled() ? 
            newOptions.map(x => (
                x.type === buttonType.combo || x.type === buttonType.daku ? {...x, selected: false, disabled: true} : {...x}
            ))
            : newOptions.map(x => (
                x.type === buttonType.combo || x.type === buttonType.daku ? {...x, selected: x.selected, disabled: false} : {...x}
            ));

            return newOptions;
        }
        
        var newButtonOptions = defaultbuttonOptions;

        if(btn.type != buttonType.all && btn.type != buttonType.start && btn.type != buttonType.random && !btn.disabled){
            newButtonOptions = toggleSelected(btn.type);
        }

        switch (btn.type){
            case buttonType.all:{
                newButtonOptions = btn.selected ?
                defaultbuttonOptions
                : buttonOptions.map(x => (
                    x.type == buttonType.start || x.type == buttonType.random ? {...x, selected: false} : {...x, selected: true, disabled: false}
                ));
                break;
            }
            case buttonType.random:{
                newButtonOptions = btn.selected ?
                defaultbuttonOptions
                : buttonOptions.map(x => (
                    x.type == buttonType.random ? {...x, selected: true} 
                    : x.type == buttonType.all ? {...x, selected: false} 
                    : x.type != buttonType.start ? {...x, selected: false, disabled: true}
                    : {...x}
                ));
                break;
            }
        }

        const canStart = () => {
            var can = false;
            newButtonOptions.forEach((x)=>{
                if(x.selected){
                    can = true;
                }
            })

            return can;
        }

        newButtonOptions = canStart() ? 
        newButtonOptions.map(x => (
            x.type === buttonType.start ? {...x, disabled: false} : {...x}
        ))
        : newButtonOptions.map(x => (
            x.type === buttonType.start ? {...x, disabled: true} : {...x}
        ));

        setButtonOptions(newButtonOptions);
        onClick(btn);
    }


    return (
        <>
            <div className="flex min-h-screen place-content-center p-20 ">
                <div className="min-w-fit m-auto h-full w-fit max-w-lg bg-white border border-gray-200 rounded-lg shadow">
                    <div className="px-8 py-6">
                        <h1 className=" text-center mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl">
                            {"Kana Practice"}
                        </h1>
                        <div className="flex flex-col items-center">
                            <ButtonGroup buttonOptions={buttonOptions.filter(x=>x.group==1)} onClick={homeOnClick}/>
                            <ButtonGroup buttonOptions={buttonOptions.filter(x=>x.group==2)} onClick={homeOnClick}/>
                            <ButtonGroup buttonOptions={buttonOptions.filter(x=>x.group==3)} onClick={homeOnClick}/>
                            <ButtonGroup buttonOptions={buttonOptions.filter(x=>x.group==4)} onClick={homeOnClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;