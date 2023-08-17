
export const groupBy = <K, V>(xs: V[], getKey: (v: V) => K): Map<K, V[]> => {
    const grouped = new Map<K, V[]>();
    for (const x of xs) {
        const k = getKey(x);
        if (!grouped.has(k)) {
            grouped.set(k, []);
        }
        grouped.get(k)!.push(x);
    }
    return grouped;
};

export const groupBy1 = <K, V>(xs: V[], getKey: (v: V) => K): Map<K, V> => {
    const grouped = new Map<K, V>();
    for (const x of xs) {
        const k = getKey(x);
        grouped.set(k, x);
    }
    return grouped;
};

// source: https://stackoverflow.com/a/38181008/1590415
export const insert = <A>(arr: A[], index: number, newItem: A) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
];

export const insertAt = <A>(index: number, newItem: A) => (arr: A[]): A[] => insert(arr, index, newItem);
