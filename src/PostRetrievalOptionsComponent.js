import LabeledCheckboxComponent from "./LabeledCheckboxComponent";
//import './PostRetrievalOptionsComponent.css'


function PostRetrievalOptionsComponent({setSummary,setFusion,setRerank}) {
    const summaryOptions=['Zero Shot Summary','Few Shot Summary'];
    const fusionOptions=['Zero Shot Fusion','Fusion In-Context'];
    const rerankOptions=['Lost In The Middle','Diversity'];

    return(
        <div id="post-retrieval-options" className='flex flex-col p-5'>
            <h3 className="mb-2">Post retrieval options</h3>
            <LabeledCheckboxComponent name='summary' options={summaryOptions} checked={false} setChange={setSummary}/>
            <LabeledCheckboxComponent name='fusion' options={fusionOptions} checked={false} setChange={setFusion}/>
            <LabeledCheckboxComponent name='rerank' options={rerankOptions} checked={false} setChange={setRerank}/>
        </div>
    );
}

export default PostRetrievalOptionsComponent;