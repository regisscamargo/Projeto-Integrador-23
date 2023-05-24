const app = document.getElementById('IDReact');

function OutroTeste({Parametros}) {
    return (
        <h2>Outro teste {Parametros}</h2>
    )
}

function Teste(params) {
    return (
        <div>
            <h1>Teste React</h1>
            <OutroTeste Parametros="Com Parametros"/>
        </div>
    )
}

ReactDOM.render(<Teste/>, app)