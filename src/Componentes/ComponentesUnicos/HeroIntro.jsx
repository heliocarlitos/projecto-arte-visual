function HeroIntro({ Titulo, Texto }) {
    return (
        <>
            <div className="HeroIntro">

                <div className="Titulo">
                    <p>{Titulo}</p>
                </div>

                <div className="Texto">
                    <p>{Texto}</p>
                </div>

            </div>
        </>
    )
}
HeroIntro.defaultProps = {
    Titulo: 'Adicionar Titulo',
    Texto: 'Breve descrição para quem procura algo novo.'
}
export default HeroIntro;