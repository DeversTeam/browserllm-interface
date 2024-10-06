import { useEffect, useState } from 'react';

function LabeledCheckboxComponent({name,options,checked,setChange}) {
    const [isChecked,setChecked] = useState(checked);
    const [option,setOption]=useState(options[0]);
    useEffect(()=>{
        console.log(isChecked+" "+option);
        
        setChange([isChecked,option]);
    },[isChecked,option,setChange])
    return(
        <div className="flex flex-row items-center mb-2">
                <input id={name} type='checkbox' className="appearance-none size-5 border border-solid border-gray-300 rounded hover:border-slate-500 active:bg-gray-800 checked:bg-gray-300 hover:cursor-pointer peer" name={name} onChange={e=>setChecked(e.target.checked)}/>
                <span className="text-white transition-opacity opacity-0 pointer-events-none -translate-x-full peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 -translate-x-1/4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <label htmlFor={name} className="flex flex-row items-center">
                <select id={name+'Option'} className="rounded border-gray-300 border hover:cursor-pointer border-solid appearance-none hover:border-slate-500 focus:outline-none px-2" onChange={e=>setOption(e.target.value)}>
                    {options.map((option)=><option value={option}>{option}</option>)}
                </select>
            </label>
        </div>
    );
}

export default LabeledCheckboxComponent;