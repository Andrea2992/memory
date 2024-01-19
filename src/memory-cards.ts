const memoryCards: MemoryCard[] = [
    {
        image: '../assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 0,
    },
    {
        image: '../assets/dices.jpg',
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 1
    },
    {
        image: '../assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 2
    },
    {
        image: '../assets/soccer-ball.jpg',
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 3
    }
]

export default memoryCards;
export type MemoryCard = {
    image:string,
    isVisible:boolean,
    tag:string,
    isPlayable: boolean,
    key:number
}