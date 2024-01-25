const memoryCards: MemoryCard[] = [
    {
        image: 'assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 0
    },
    {
        image: 'assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 1
    },
    {
        image: 'assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 2
    },
    {
        image: 'assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 3
    },
    {
        image: 'assets/compass.png',
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 4
    },
    {
        image: 'assets/compass.png',
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 5
    },
    {
        image: 'assets/lake-sun.jpg',
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 6
    },
    {
        image: 'assets/lake-sun.jpg',
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 7
    },
    {
        image: 'assets/man.jpg',
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 8
    },
    {
        image: 'assets/man.jpg',
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 9
    },
    {
        image: 'assets/mineral.jpg',
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 10
    },
    {
        image: 'assets/mineral.jpg',
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 11
    },
    {
        image: 'assets/moon.jpg',
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 12
    },
    {
        image: 'assets/moon.jpg',
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 13
    },
    {
        image: 'assets/village.jpg',
        isVisible: false,
        tag: 'village',
        isPlayable: true,
        key: 14
    },
    {
        image: 'assets/village.jpg',
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