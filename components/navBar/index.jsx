

const NavBar = () => {
    return (
        <div className="flex items-center">
            <a>
            <img src="/logo_egressos.png" alt="Logo IF" />
            </a>
            <div className="">
                <a className="text-white">
                    Início
                </a>
                <a className="text-white">
                    Sobre
                </a>
                <a className="text-white">
                    Notícias
                </a>
                <a className="text-white">
                    Nossos egressos
                </a>
            </div>
            <div>
                <button className="text-white">Entrar</button>
                <button className="text-white">Cadastrar-se</button>
            </div>
        </div>
    );
    
}

export default NavBar;