import React, { useState } from 'react';

const Questao02 = () => {
    // controlar a imagem exibida
    const [isFront, setIsFront] = useState(true);

    // rRLs das imagens
    const frontImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const backImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    // função para alternar a imagem
    const toggleImage = () => {
        setIsFront(!isFront);
    };

    return (
        <div>
            <h1>Pikachu</h1>
            {/* renderiza a imagem com base no estado */}
            <img 
                src={isFront ? frontImage : backImage} 
                alt="Pikachu" 
                style={{ width: '150px', height: '150px' }}
            />
            <button onClick={toggleImage}>
                {isFront ? 'Mostrar costas' : 'Mostrar frente'}
            </button>
        </div>
    );
};

export default Questao02;
