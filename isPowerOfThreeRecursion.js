//: Проверка на то, является ли переданное число степенью тройки с использоаним рекурсивного процесса 
export const isPowerOfThree = num => {
    return num === 1 ? true : num < 1 ? false : isPowerOfThree(num / 3);
 };
