
String.prototype.padZero = function (this : string, length: number) {
    let s = this;
    while (s.length < length) {
        s = '0' + s;
    }
    return s;
};

Array.prototype.distinct = function<T>(this: Array<T>){
    return Array.from<T>(new Set<T>(this));
}

Array.prototype.toLookup = function<T>(this: Array<T>, keySelector: (_:T) => KeyType){
    return this.reduce((previous, current) => ({...previous, [keySelector(current)]: current}), {})
}

export type Lookup<T> = {
    [key: string]: T
};

export type KeyType = string | number | symbol;