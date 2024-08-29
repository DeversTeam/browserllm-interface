//import './PreRetrievalOptionsComponent.css';

function PreRetrievalOptionsComponent({setOptions}) {
    return(
        <div id="pre-retrieval-options" className='flex flex-col p-5'>
            <h3 className="mb-2">Pre retrieval options</h3>
            <select id="pre-retrieval-options-list" className="rounded border-gray-300 border hover:cursor-pointer border-solid appearance-none hover:border-slate-500 focus:outline-none px-2" onChange={e=> setOptions(e.target.value)}>
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