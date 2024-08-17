function LabeledCheckboxComponent({name,options}) {
    return(
        <div>
            <input id={name} type='checkbox' name={name}></input>
            <label for={name}>
                <select id={name+'Option'}>
                    {options.map((option)=><option value={option}>{option}</option>)}
                </select>
            </label>
        </div>
    );
}

export default LabeledCheckboxComponent;