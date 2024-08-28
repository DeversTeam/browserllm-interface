import LinkComponent from "./LinkComponent";
//import "./LinkListComponent.css";

function LinkListComponent({titles,links,summaries}) {

    return(
        <div className="">
            <ul id="link-list" className="flex flex-col pl-5 pr-5 pb-5 w-5/6">
                {links.map((link,index) => <LinkComponent title={titles[index]} link={link} summary={summaries[index]}></LinkComponent>)}
            </ul>
            <div id="loader-links"></div>
            <div id="loader-list" className="flex-col animate-pulse hidden pl-5 pr-5 pt-5 pb-5">
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
            </div>
        </div>
    );
}

export default LinkListComponent;