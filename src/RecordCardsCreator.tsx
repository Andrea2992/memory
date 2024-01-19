import './RecordCardsCreator.css';
import { useState } from 'react';

function RecordCardsCreator({ image, isVisible, id, onCardClicked }: RecordCardsCreatorProps) {

    const backCard = "../assets/card-back.jpg";
    const frontOrBack = isVisible === true ? image : backCard;

    return (
        <>
            <div
                className="single-card-container"
                onClick={() => onCardClicked(id)}
            >
                <img className='memory-image' src={frontOrBack} alt="tag" />
            </div>
        </>
    )
}

export default RecordCardsCreator;
export type RecordCardsCreatorProps = {
    image: string,
    isVisible: boolean,
    id: number,
    onCardClicked: (id: number) => void
}