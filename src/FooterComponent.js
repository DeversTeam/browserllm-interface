function FooterComponent({children}){
    return(
        <div className="flex flex-col w-full">
            <div id="top-footer" className="flex flex-row">
                <p className="pl-7 pr-3 py-3" href="">Belgique</p>
            </div>
            <hr class="h-px bg-gray-300 border-0" />
            <div id="bot-footer" className="flex flex-row">
                <div className="flex w-1/3 justify-start">
                    <a className="pl-7 pr-3 py-3 hover:underline" href="https://web.umons.ac.be" target="_blank" rel="noreferrer">UMons</a>
                    <a className="px-3 py-3 hover:underline" href="https://web.umons.ac.be/fpms/" target="_blank" rel="noreferrer">FPMs</a>
                </div>
                <div className="flex w-1/3 justify-center">
                    <a className="pl-7 pr-3 py-3 hover:underline" href="https://web.umons.ac.be" target="_blank" rel="noreferrer">UMons</a>
                </div>
                <div className="flex w-1/3 justify-end">
                    <a className="pl-7 pr-3 py-3 hover:underline" href="https://web.umons.ac.be" target="_blank" rel="noreferrer">UMons</a>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;