function LabeledRadioButtonComponent({label,group}) {
    return(
        <div>
            <label>{label}</label>
            <input id={label} type='radio' name={group} value={label}></input>
        </div>
    );
}

export default LabeledRadioButtonComponent;