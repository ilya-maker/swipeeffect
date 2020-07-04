import React, { useState } from 'react';
import CN from 'classnames';

import './style.scss';

export const ProductCard = () => {
    const [startPosition, setStartPosition] = useState();
    const [currentAnimation, setCurrentAnimation] = useState('');
    const [isChanged, setIsChanged] = useState(false);

    const handleBlockPosition = (currentCoord) => {
        if (isChanged) {
            return;
        }
        if (currentAnimation === 'blockIs__up' && currentCoord - 20 > startPosition) {
            setCurrentAnimation('blockIs__middle__from__up');
            setIsChanged(true);
        } else if (currentAnimation === 'blockIs__down' && currentCoord + 20 < startPosition) {
            setCurrentAnimation('blockIs__middle__from__down');
            setIsChanged(true);
        } else if (currentCoord - 50 > startPosition) {
            setCurrentAnimation('blockIs__down');
            setIsChanged(true);
        } else if (currentCoord + 50 < startPosition) {
            setCurrentAnimation('blockIs__up');
            setIsChanged(true);
        }
    };

    const handlerDoubleClick = () => {
        setTimeout(() => setCurrentAnimation('blockIs__down'), 0);
        setTimeout(() => setCurrentAnimation('blockIs__middle__from__down'), 800);
        setTimeout(() => setCurrentAnimation('blockIs__up'), 1700);
        setTimeout(() => setCurrentAnimation('blockIs__middle__from__up'), 3200);
        setTimeout(() => setCurrentAnimation(''), 4200);
    };

    return (
        <>
            <div
                 className={CN('card', `${currentAnimation}`)}
                 onTouchEnd={() => setIsChanged(false)}
                 onTouchStart={event => setStartPosition(event.targetTouches[0].pageY)}
                 onTouchMove={event => handleBlockPosition(event.targetTouches[0].pageY)}
                 onDoubleClick={handlerDoubleClick}
            >
                <div className="card__delete">
                    <span className="card__cross"></span>
                </div>
                {/*<div className="card__photo">*/}
                {/*    <img*/}
                {/*        src="./imgs/arizona-burger_1584962897186.jpeg"*/}
                {/*        alt="burger"*/}
                {/*        className={CN('card__img', `${currentAnimation}__img`)}*/}

                {/*    />*/}
                {/*</div>*/}
                <div className="card__img">

                </div>
                {/*<div className="card__radius">*/}

                {/*</div>*/}
                <div className='card__text'>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloribus eligendi error illo nulla, repudiandae tempore!
                    </p>
                </div>
            </div>
        </>
    )
};
