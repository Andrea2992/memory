import store from '../redux/store'

export class MemoryGame {

    public gameStatus(/*state*/) {
        
    }

    private isRightCouple(tags: string[]) {
        console.log(store.getState())
        return tags[0] === tags[1];
    }
}