declare type KeyType = string | number | symbol;
    
declare type Lookup<T> = {
    [key: KeyType]: T
};

declare interface String {
    padZero(length: number): string;
}

declare interface Array<T> {
    distinct(): Array<T>;
}

declare interface Array<T> {
    toLookup(length: number, keySelector: (_:T) => KeyType): Lookup<T>;
}