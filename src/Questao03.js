import React, { useEffect, useState } from 'react';

const Questao03 = () => {
    // estados para armazenar as capitais com maior e menor população
    const [maxPopCapital, setMaxPopCapital] = useState(null);
    const [minPopCapital, setMinPopCapital] = useState(null);

    // função para buscar dados e encontrar as capitais com maior e menor população
    const fetchData = async () => {
        try {
            // Fetch dos dados da API
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await response.json();

            // encontra as capitais com maior e menor populacão
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

            // atualiza o estado com as capitais encontradas
            setMaxPopCapital(maxPopCapital);
            setMinPopCapital(minPopCapital);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Usa useEffect para chamar fetchData ao montar o componente
    useEffect(() => {
        fetchData();
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

export default Questao03;
