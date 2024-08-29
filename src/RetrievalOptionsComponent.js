//import './RetrievalOptionsComponent.css';

function RetrievalOptionsComponent({setOptions,setTopK}) {
    return(
        <div id="retrieval-options" className='flex flex-col items-center p-5'>
            <h3 className="mb-2">Retrieval options</h3>
            <select id="retrieval-options-list" className="mb-2 rounded border-gray-300 border hover:cursor-pointer border-solid appearance-none hover:border-slate-500 focus:outline-none px-2" onChange={e=> setOptions(e.target.value)}>
                <option value="bm25">BM25</option>
                <option selected value="embeddings">Embeddings</option>
                <option value="hybrid">Hybrid</option>
            </select>
            <div>
                <label for="top_k">Top K : </label>
                <input id="top_k" className="border rounded border-solid border-gray-300" name="top_k" type="number" step="1" min="10" max="100" defaultValue="10" placeholder="10" onChange={e=> setTopK(e.target.value)}></input>
            </div>
        </div>
    );
}

export default RetrievalOptionsComponent;