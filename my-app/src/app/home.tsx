
import { useState } from "react";
import Button, { buttonProps, buttonType } from "./components/button";

interface homeProps {
    OnClick: (arg: any) => any;
}

const Home = ({OnClick}: homeProps) => {


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
            disabled: false,
            selected: false,
            group: 3,
        },
        {
            type: buttonType.combo, 
            disabled: false,
            selected: false,
            group: 3,
        },
        {
            type: buttonType.start, 
            disabled: false,
            selected: false,
            group: 4,
        }
    ];

    const [buttonOptions, setButtonOptions] = useState(defaultbuttonOptions);

    const homeOnClick = (btn:buttonProps) => {

        const checkForAllSelected = () => {
            var count = 0;
            buttonOptions.forEach(x => (
                (x.type == buttonType.kata || x.type == buttonType.hira || x.type == buttonType.daku || x.type == buttonType.combo) && x.selected == true ? count++ : {}
            ));
            return count == 3;
        }

        const toggleSelected = (type: buttonType) => {
            const newOptions = btn.selected == true ? 
            buttonOptions.map(x => (
                x.type == type || x.type == buttonType.all? {...x, selected: !btn.selected} : {...x}
            ))
            : checkForAllSelected() ? 
            buttonOptions.map(x => (
                x.type == type || x.type == buttonType.all? {...x, selected: true} : {...x}
            ))
            : buttonOptions.map(x => (
                x.type == type ? {...x, selected: !btn.selected} : {...x}
            ));


            return newOptions;
        }

        if(btn.type != buttonType.all && btn.type != buttonType.start && btn.type != buttonType.random && !btn.disabled){
            setButtonOptions(toggleSelected(btn.type));
        }

    switch (btn.type){
        case buttonType.all:{

            const newOptions = btn.selected == true ?
            buttonOptions.map(x => (
                x.type != buttonType.random && x.type != buttonType.start ? {...x, selected: false} : {...x}
            ))
            : buttonOptions.map(x => (
                x.type == buttonType.start || x.type == buttonType.random ? {...x, selected: false} : {...x, selected: true, disabled: false}
            ));


            setButtonOptions(newOptions);

            break;
        }
        case buttonType.random:{
            const newOptions = btn.selected == true ?
            buttonOptions.map(x => (
                x.type == buttonType.random ? {...x, selected: false} : {...x, disabled: false}
            ))
            : buttonOptions.map(x => (
                x.type == buttonType.random ? {...x, selected: true} 
                : x.type == buttonType.all ? {...x, selected: false} 
                : x.type != buttonType.start ? {...x, selected: false, disabled: !x.disabled}
                : {...x}
            ));


            setButtonOptions(newOptions);

            break;
        }
    }

    OnClick(btn.type);
}


    return (
        <>
            <main className="flex min-h-screen flex-col items-center place-content-center p-20">
                <h1 className="text-6xl">
                    Practice Kana
                </h1>
                <div className="inline-flex" role="group">
                    {
                        buttonOptions.map(button => (
                            button.group == 1 ? <Button {...button} key={button.type} onClick={homeOnClick}/> : <></>
                        ))
                    }
                </div>
                <div className="inline-flex" role="group">
                    {
                        buttonOptions.map(button => (
                            button.group == 2 ? <Button {...button} key={button.type} onClick={homeOnClick}/> : <></>
                        ))
                    }
                </div>
                <div className="inline-flex" role="group">
                    {
                        buttonOptions.map(button => (
                            button.group == 3 ? <Button {...button} key={button.type} onClick={homeOnClick}/> : <></>
                        ))
                    }
                </div>
                <div className="inline-flex" role="group">
                    {
                        buttonOptions.map(button => (
                            button.group == 4 ? <Button {...button} key={button.type} onClick={homeOnClick}/> : <></>
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Home;