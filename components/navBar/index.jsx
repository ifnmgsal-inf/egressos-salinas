

const NavBar = () => {
    return (
        <div className="flex justify-between items-center mx-10">
            <a>
                <img className="cursor-pointer" src="/logo_egressos.png" alt="Logo IF" />
            </a>
            <div className="flex space-x-6 h-12 mt-8">
                <div className="flex w-100  justify-center cursor-pointer text-white text-13 hover:border-b hover:border-b-primary">
                    <a>
                        Início
                    </a>
                </div>
                <div className="flex w-100 justify-center cursor-pointer text-white text-13 hover:border-b hover:border-b-primary">
                    <a >
                        Sobre
                    </a>
                </div>
                <div className="flex w-100 justify-center cursor-pointer text-white text-13 hover:border-b hover:border-b-primary">
                <a >
                    Notícias
                </a>
                </div>
                <div className="flex w-100 justify-center cursor-pointer text-white text-13 hover:border-b hover:border-b-primary">
                <a>
                    Nossos egressos
                </a>
                </div>                
            </div>
            <div className="space-x-4">
                <button className="py-1.5 px-10 text-white text-13 borde-solid border rounded-sm hover:bg-primary hover:border-primary transition-all">Entrar</button>
                <button className="py-1.5 px-6 text-white text-13 bg-primary borde-solid border border-primary rounded-sm">Cadastrar-se</button>
            </div>
        </div>
    );
    
}

export default NavBar;