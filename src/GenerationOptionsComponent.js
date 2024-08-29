//import './GenerationOptionsComponent.css'

function GenerationOptionsComponent({setOptions, setPresentationOption}) {
    return(
        <div id="generator-options" className='flex flex-col p-5'>
            <h3 className="mb-2 border-l">Generator options</h3>
            <select id="generation-options-list" className="mb-2 rounded border-gray-300 border hover:cursor-pointer border-solid appearance-none hover:border-slate-500 focus:outline-none px-2 w-max" onChange={e=> setOptions(e.target.value)}>
                <option value="gpt">GPT</option>
                <option value="llama">LLAMA</option>
                <option selected value="mixtral">MIXTRAL</option>
            </select>
            <select id="presentation-option-list" className="rounded border-gray-300 border hover:cursor-pointer border-solid appearance-none hover:border-slate-500 focus:outline-none px-2" onChange={e=> setPresentationOption(e.target.value)}>
                <option value="links">Links</option>
                <option value="links + answer">Links and answer</option>
                <option selected value="links + answer + summary">Links, answer and summary</option>
            </select>
        </div>
    );
}

export default GenerationOptionsComponent;