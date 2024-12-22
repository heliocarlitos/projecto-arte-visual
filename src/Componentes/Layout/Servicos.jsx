import HeroIntro from "../ComponentesUnicos/HeroIntro";
import { LiaBezierCurveSolid } from "react-icons/lia";
import { SiAirplayvideo } from "react-icons/si";
import { CiAt } from "react-icons/ci";
import { GoBrowser } from "react-icons/go";
import capa_1 from "../../imagens/gerais/capa_1.webp";

function Servicos() {
    return (
        <>
            <section className="SecaoDeServicos">
                <HeroIntro Titulo="O futuro do design começa aqui" Texto="Pare de perder tempo e dinheiro projetando e gerenciando projectos que não obtém resultados. Felicidade garantida!" />

                <div className="OsServicos">

                    <div className="Bloco">

                        <div className="CardServico">

                            <div className="Icon">
                                <LiaBezierCurveSolid />
                            </div>

                            <div className="Titulo">
                                <p>Design Gráfico</p>
                            </div>

                            <div className="Texto">
                                <p>Oferecemos soluções de design gráfico visualmente atraentes que destacam seus produtos e marcas.</p>
                            </div>

                        </div>

                        <div className="CardServico">

                            <div className="Icon">
                                <SiAirplayvideo />
                            </div>

                            <div className="Titulo">
                                <p>Criação de vídeos publicitários</p>
                            </div>

                            <div className="Texto">
                                <p>Desenvolvemos conteúdos digitais envolventes que promovem seus produtos de maneira eficais e atraente.</p>
                            </div>

                        </div>

                        <div className="CardServico">

                            <div className="Icon">
                                <CiAt />
                            </div>

                            <div className="Titulo">
                                <p>Gestão de mídias sociais</p>
                            </div>

                            <div className="Texto">
                                <p>Oferecemos estraégias de gestão de mídias sociais para aumentar a presença online da sua empresa e impulsionar as vendas de seus produtos.</p>
                            </div>

                        </div>

                        <div className="CardServico">

                            <div className="Icon">
                                <GoBrowser />
                            </div>

                            <div className="Titulo">
                                <p>Desenvolvimento de web site</p>
                            </div>

                            <div className="Texto">
                                <p>Desenvolvemos sites modernos, responsivos e optmizados para acessibilidade e SEO com tecnologias actuais.</p>
                            </div>

                        </div>

                    </div>

                    <div className="Imagem">
                        <figure><img src={capa_1} alt="Imagem de capa" loading="lazy" /></figure>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Servicos;
