import React, { useEffect, useState } from 'react';

// Função que retorna uma Promise com dados estáticos
const fetchDataFromPromise = () => {
    return new Promise((resolve) => {
        resolve([
            { "capital": ["Dublin"], "population": 4994724 },
            { "capital": ["Nicosia"], "population": 1207361 },
            { "capital": ["Madrid"], "population": 47351567 }
        ]);
    });
};

const Questao04 = () => {
    // Estados para armazenar as capitais com maior e menor população
    const [maxPopCapital, setMaxPopCapital] = useState(null);
    const [minPopCapital, setMinPopCapital] = useState(null);

    // Função para processar dados da Promise
    const processData = async () => {
        try {
            // Usa a Promise para obter os dados
            const data = await fetchDataFromPromise();

            // Encontra as capitais com maior e menor população
            let maxPop = -Infinity;
            let minPop = Infinity;
            let maxPopCapital = null;
            let minPopCapital = null;

            data.forEach((item) => {
                const { capital, population } = item;
                if (population > maxPop) {
                    maxPop = population;
                    maxPopCapital = capital[0];
                }
                if (population < minPop) {
                    minPop = population;
                    minPopCapital = capital[0];
                }
            });

            // Atualiza o estado com as capitais encontradas
            setMaxPopCapital(maxPopCapital);
            setMinPopCapital(minPopCapital);
        } catch (error) {
            console.error('Error processing data:', error);
        }
    };

    // Usa useEffect para chamar processData ao montar o componente
    useEffect(() => {
        processData();
    }, []);

    return (
        <div>
            <h1>Capitais da Europa</h1>
            {maxPopCapital && minPopCapital ? (
                <div>
                    <p><strong>Capital com maior população:</strong> {maxPopCapital}</p>
                    <p><strong>Capital com menor população:</strong> {minPopCapital}</p>
                </div>
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
    );
};

export default Questao04;
