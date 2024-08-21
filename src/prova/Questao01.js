import React from 'react';

// componente Questao01B (função clássica)
// este componente recebe uma prop chamada "lista", que é um array de objetos.
// ele calcula o maior valor entre as propriedades 'a', 'b' e 'c' de cada objeto e renderiza esses valores em uma lista.
function Questao01B(props) {
    const { lista } = props;

    // calcula o maior valor entre 'a', 'b' e 'c' para cada objeto na lista.
    const maiores = lista.map((objeto) => {
        return Math.max(objeto.a, objeto.b, objeto.c);
    });

    return (
        <div>
            <h2>Maiores valores:</h2>
            <ul>
                {/* renderiza cada valor máximo em um item de lista */}
                {maiores.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))}
            </ul>
        </div>
    );
}

// componente Questao01A (função arrow)
// este componente defie uma lista de objetos e passa essa lista para o componente Questao01B como prop.
const Questao01A = () => {
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ];

    return (
        <div>
            <h1>Questão 01A</h1>
            {/* passa a lista para o componente Questao01B */}
            <Questao01B lista={lista} />
        </div>
    );
};

export default Questao01A;
