//import './PreRetrievalOptionsComponent.css';

function PreRetrievalOptionsComponent({setOptions}) {
    return(
        <div id="pre-retrieval-options" className='side-margins'>
            <h3>Pre retrieval options</h3>
            <select id="pre-retrieval-options-list" className="" onChange={e=> setOptions(e.target.value)}>
                <option value="">No Pre-Retrieval</option>
                <option value="rewrite">Query Rewriting</option>
                <option value="expanse">Query Expansion</option>
                <option value="flare">FLARE</option>
                <option value="hyde">HyDE</option>
            </select>
        </div>
    );
}

export default PreRetrievalOptionsComponent;