import './index.css'

import Logo from "../../Pages/image/eagles.43967f06d9e3d7568d7f.png";
import ShoesPink from "../../Pages/image/shoespink.png"

function Descricao() {
    return (
        <div className='Container'>
            <header className='Cabecalho'>
                <img src={Logo} alt="Logo do Site" title="Logo do Site" />
                <div className='Texto'>
                    <p> Masculino  </p>
                    <p> Feminino </p>
                    <p> Infantil </p>
                    <p> Coleções </p>
                </div>
            </header>
            
            <div className='Main'>
                <img src={ShoesPink} alt="Tênis rosa" title="Tênis Rosa" />

                <div className='Descri'>
                    <p> Feminino/Calçado/Esportivo  </p>
                    <h1> Tênis Esportivo: Feminino Minus </h1>
                    <p> R$ 279,00 5x de R$ 55,98 </p>
                    <p> Cor Pink </p>
                </div>
            </div>

            <button> Avançar </button>
            <button> Voltar </button>

        </div>

    );
}

export default Descricao;