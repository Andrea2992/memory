const memoryCards: MemoryCard[] = [
    {
        image: 'memory/assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 0
    },
    {
        image: 'memory/assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 1
    },
    {
        image: 'memory/assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 2
    },
    {
        image: 'memory/assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 3
    },
    {
        image: 'memory/assets/compass.png',
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 4
    },
    {
        image: 'memory/assets/compass.png',
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 5
    },
    {
        image: 'memory/assets/lake-sun.jpg',
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 6
    },
    {
        image: 'memory/assets/lake-sun.jpg',
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 7
    },
    {
        image: 'memory/assets/man.jpg',
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 8
    },
    {
        image: 'memory/assets/man.jpg',
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 9
    },
    {
        image: 'memory/assets/mineral.jpg',
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 10
    },
    {
        image: 'memory/assets/mineral.jpg',
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 11
    },
    {
        image: 'memory/assets/moon.jpg',
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 12
    },
    {
        image: 'memory/assets/moon.jpg',
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 13
    },
    {
        image: 'memory/assets/village.jpg',
        isVisible: false,
        tag: 'village',
        isPlayable: true,
        key: 14
    },
    {
        image: 'memory/assets/village.jpg',
        isVisible: false,
        tag: 'village',
        isPlayable: true,
        key: 15
    }
]

export default memoryCards;
export type MemoryCard = {
    image: string,
    isVisible: boolean,
    tag: string,
    isPlayable: boolean,
    key: number
}