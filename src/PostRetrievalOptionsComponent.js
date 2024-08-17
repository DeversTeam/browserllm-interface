import LabeledCheckboxComponent from "./LabeledCheckboxComponent";
import './PostRetrievalOptionsComponent.css'

function PostRetrievalOptionsComponent() {
    const summaryOptions=['Zero Shot Summary','Few Shot Summary'];
    const fusionOptions=['Zero Shot Fusion','Fusion In-Context'];
    const rerankOptions=['Lost In The Middle','Diversity'];
    return(
        <div id="post-retrieval-options" className='side-margins'>
            <h3>Post retrieval options</h3>
            <LabeledCheckboxComponent name='summary' options={summaryOptions}/>
            <LabeledCheckboxComponent name='fusion' options={fusionOptions}/>
            <LabeledCheckboxComponent name='rerank' options={rerankOptions}/>
        </div>
    );
}

export default PostRetrievalOptionsComponent;