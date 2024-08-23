import './RetrievalOptionsComponent.css';

function RetrievalOptionsComponent() {
    return(
        <div id="retrieval-options" className='vertical-align side-margins'>
            <h3>Retrieval options</h3>
            <select id="retrieval-options-list">
                <option value="bm25">BM25</option>
                <option selected value="embeddings">Embeddings</option>
                <option value="hybrid">Hybrid</option>
            </select>
            <div>
                <label for="top_k">Top K : </label>
                <input id="top_k" name="top_k" type="number" step="1" min="10" max="100" placeholder="10"></input>
            </div>
        </div>
    );
}

export default RetrievalOptionsComponent;