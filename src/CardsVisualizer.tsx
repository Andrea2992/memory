import { useDispatch } from 'react-redux';
import './CardsVisualizer.css';
import memoryCards from './memory-cards';
import RecordCardsCreator from './RecordCardsCreator';
import { useEffect, useState } from 'react';
import { updateCards } from './redux/memoryCardsSlice';



function CardsVisualizer() {
    const [cards, setCards] = useState(memoryCards);
    const dispatch = useDispatch();
    const shuffleArray = <T extends any[]>(array: T): T => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    const handleCardClicked = (id: number) => {
        const index = cards.findIndex((card) => {
            return card.key === id
        });
        const cardCopy = {...cards[index]}
        const tempCards = [...cards];
        cardCopy.isVisible = !tempCards[index].isVisible;
        tempCards[index] = cardCopy;
        setCards(tempCards);
        dispatch(updateCards(tempCards))
    }

    useEffect(() => {
        const newArray = shuffleArray([...cards]);
        setCards(newArray)
    }, []);

    const memoryRecordCards = cards.map((c) =>
        <RecordCardsCreator
            key={c.key}
            image={c.image}
            isVisible={c.isVisible}
            id={c.key}
            onCardClicked={handleCardClicked}
        />
    )

    return (
        <>
            <div id="cards-container">{memoryRecordCards}</div>
        </>
    )
}

export default CardsVisualizer;