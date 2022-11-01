class Slider {
    constructor(userArray, index = 0) {
        this._arrayUser = userArray;
        this._currentIndex = index;
    }

    get currentImages() {
        return this._arrayUser[this._currentIndex]
    }

    set currentIndex(v) {
        if(typeof v !== 'number') {
            throw TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    get prev() {
        return ((this._currentIndex + 1) % this._arrayUser.length);
    }
    get next() {
        return ((this._currentIndex - 1 + this._arrayUser.length) % this._arrayUser.length);
    }
    // 1. щоб повертав адресу картинки за поточним індексом
    // 2. щоб він міг перемикати на наступний слайд
    // 3. щоб він міг перемикатись і на попередній слайд
}