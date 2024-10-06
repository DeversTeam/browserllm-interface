function NavbarComponent({children}){
    return(
        <div className="flex flex-row">
            <div className="px-7 py-5">
                <a className="hover:underline" href="https://github.com/DeversTeam/browserllm-interface">À propos</a>
            </div>
        </div>
    );
}

export default NavbarComponent;