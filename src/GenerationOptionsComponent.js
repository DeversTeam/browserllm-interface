//import './GenerationOptionsComponent.css'

function GenerationOptionsComponent({setOptions, setPresentationOption}) {
    return(
        <div id="generator-options" className='flex flex-col side-margins'>
            <h3>Generator options</h3>
            <select id="generation-options-list" onChange={e=> setOptions(e.target.value)}>
                <option value="gpt">GPT</option>
                <option value="llama">LLAMA</option>
                <option selected value="mixtral">MIXTRAL</option>
            </select>
            <select id="presentation-option-list" onChange={e=> setPresentationOption(e.target.value)}>
                <option value="links">Links</option>
                <option value="links + answer">Links and answer</option>
                <option selected value="links + answer + summary">Links, answer and summary</option>
            </select>
        </div>
    );
}

export default GenerationOptionsComponent;