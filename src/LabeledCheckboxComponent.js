import { useState } from 'react';

function handleChange(isChecked,setChecked,option,setOption,setChange,checkedValue,optionValue){
    if(checkedValue!==""){
        setChecked(checkedValue);
    }
    if(optionValue!==""){
        setOption(optionValue);
    }
    setChange([isChecked,option]);
}

function LabeledCheckboxComponent({name,options,checked,setChange}) {
    const [isChecked,setChecked] = useState(checked);
    const [option,setOption]=useState(options[0]);
    return(
        <div>
            <input id={name} type='checkbox' name={name} onChange={e=>handleChange(isChecked,setChecked,option,setOption,setChange,e.target.checked,"")}></input>
            <label for={name}>
                <select id={name+'Option'} onChange={e=>handleChange(isChecked,setChecked,option,setOption,setChange,"",e.target.value)}>
                    {options.map((option)=><option value={option}>{option}</option>)}
                </select>
            </label>
        </div>
    );
}

export default LabeledCheckboxComponent;