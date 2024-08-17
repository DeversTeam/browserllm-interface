import PreRetrievalOptionsComponent from "./PreRetrievalOptionsComponent";
import RetrievalOptionsComponent from "./RetrievalOptionsComponent";
import PostRetrievalOptionsComponent from "./PostRetrievalOptionsComponent";
import GenerationOptionsComponent from "./GenerationOptionsComponent";
import './AdvancedOptionsComponent.css';

function unhideAdvancedOptions() {
    const element=document.getElementById('advanced-options')
    if (element.style.display!=='flex') {
        element.style.display="flex"
    } else {
        element.style.display="none"
    }
}

function AdvancedOptionsComponent(){
    return(
        <div id="advanced-options-parent">
            <button onClick={unhideAdvancedOptions}>Recherche avancée</button>
            <div id='advanced-options'>
                <PreRetrievalOptionsComponent/>
                <RetrievalOptionsComponent/>
                <PostRetrievalOptionsComponent/>
                <GenerationOptionsComponent/>
            </div>
        </div>
    );
}

export default AdvancedOptionsComponent;