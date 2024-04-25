import './index.css';
import Logo from "../../Pages/image/Logo.png";

function Estoque(){
    return(
        <div>
            <header>
            <img className='Img' src={Logo} alt="Logo do Site" title="Logo do Site"/>
            </header>
            <nav>
                <a href="">Baixar</a>
                <a href="">Nitro</a>
                <a></a>
               
            </nav>
            <h1> Estoque </h1>
        </div>
    );

}
export default Estoque;
