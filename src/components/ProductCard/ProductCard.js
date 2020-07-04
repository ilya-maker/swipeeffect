import React, { useState } from 'react';
import CN from 'classnames';

import './style.scss';

export const ProductCard = () => {
    const [startPosition, setStartPosition] = useState();
    const [currentAnimation, setCurrentAnimation] = useState('');

    const handleBlockPosition = (currentCoord) => {
        if (currentCoord - 50> startPosition) {
            setCurrentAnimation('blockIs__down');
        } else if (currentCoord + 50 < startPosition) {
            setCurrentAnimation('blockIs__up');
        }
    };

    return (
        <>
            <div className="card"
                 onTouchStart={event => setStartPosition(event.targetTouches[0].pageY)}
                 onTouchMove={event => handleBlockPosition(event.targetTouches[0].pageY)}
                 onDoubleClick={() => setCurrentAnimation('blockIs__allAnimations')}
            >
                <div className="card__delete">
                    <span className="card__cross"></span>
                </div>
                <div className="card__photo">
                    <img
                        src="./imgs/arizona-burger_1584962897186.jpeg"
                        alt="burger"
                        className={CN('card__img', `${currentAnimation}__img`)}

                    />
                </div>
                <div className={CN('card__text', `${currentAnimation}__text`)}>
                    <p className="card__title">
                        Arizona burger
                    </p>
                    <p className="card__subtitle">
                        330/50/100/30 г
                    </p>
                    <p className="card__description">
                        Котлета з яловичини, бекон,  сир  Чедер, салат
                        Айзберг,  печериці у вершковому соусі, картопля фрі,
                        пікантній соус, салат
                    </p>
                </div>
            </div>
        </>
    )
};
