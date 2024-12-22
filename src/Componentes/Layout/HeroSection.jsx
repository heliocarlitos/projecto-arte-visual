import { SiAdobephotoshop, SiWondersharefilmora } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import onda_1 from "../../imagens/svg/onda_1.svg"
import onda_2 from "../../imagens/svg/onda_2.svg"

function HeroSection() {
    return (
        <>
            <section className="HeroSection">

                <div className="Icones">

                    <div className="Icon1">
                        <figure><img src={onda_1} alt="svg" loading="lay" fetchpriority="high" height="276" width="411" /></figure>
                    </div>

                    <div className="Icon2">
                        <figure><img src={onda_2} loading="lay" fetchpriority="high" alt="svg" width="820" height="692" /></figure>
                    </div>

                </div>

                <div className="Conteudo">

                    <div className="Titulo">
                        <p>Sua agência de design gráfico e criação de conteúdos digitais</p>
                    </div>

                    <div className="Texto">
                        <p fetchpriority="high" loading="lazy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio pariatur excepturi mollitia, perferendis quisquam, ab, ad ullam nihil consequatur doloremque facere magnam! Facilis ex natus fuga ut explicabo veniam?</p>
                    </div>

                    <div className="Ferramentas">
                        <div className="Icon">
                            <SiAdobephotoshop />
                        </div>

                        <div className="Icon">
                            <IoLogoFigma />
                        </div>

                        <div className="Icon">
                            <SiWondersharefilmora />
                        </div>

                        <div className="Icon">
                            <FaReact />
                        </div>

                        <div className="Icon">
                            <RiNextjsFill />
                        </div>

                        <div className="Icon">
                            <RiTailwindCssFill />
                        </div>

                    </div>

                    <div className="Btn">
                        <a href="#" aria-label="Começar">Começar</a>
                    </div>

                </div>

            </section>

        </>
    )
}
export default HeroSection;
