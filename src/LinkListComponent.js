import LinkComponent from "./LinkComponent";
import "./LinkListComponent.css";

function LinkListComponent() {
    return(
        <div>
            <ul id="link-list" className="vertical-align-left">
            </ul>
            <div id="loader-links"></div>
        </div>
    );
}

export default LinkListComponent;