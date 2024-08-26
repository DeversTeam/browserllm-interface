import LinkComponent from "./LinkComponent";
//import "./LinkListComponent.css";
import Documents from "./Documents";

function LinkListComponent() {
    return(
        <div className="w-1/2">
            <ul id="link-list" className="flex flex-col pl-5 pr-5 pt-5 pb-5 w-5/6">
                {Documents.documents.map((document) => <LinkComponent link={document.link} summary={document.summary}></LinkComponent>)}
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
                <LinkComponent link="https://fr.wikipedia.org/wiki/Chat" summary="Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés."></LinkComponent>
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
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
                <div className="">
                    <div className="flex h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/3"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-5/6"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-4/5"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="flex h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-2/3"></div>
                </div>
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