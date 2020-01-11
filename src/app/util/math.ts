const numbersBetweenZero = (num: number) =>
    Array(num)
        .fill(0)
        .map((_zero, i) => i + 1);

export { numbersBetweenZero };
