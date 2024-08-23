import './GenerationOptionsComponent.css'

function GenerationOptionsComponent() {
    return(
        <div id="generator-options" className='vertical-align side-margins'>
            <h3>Generator options</h3>
            <select id="generation-options-list">
                <option value="gpt">GPT</option>
                <option value="llama">LLAMA</option>
                <option selected value="mixtral">MIXTRAL</option>
            </select>
            <select id="presentation-option-list">
                <option value="links">Links</option>
                <option selected value="links + answer">Links and answer</option>
                <option value="links + answer + summary">Links, answer and summary</option>
            </select>
        </div>
    );
}

export default GenerationOptionsComponent;