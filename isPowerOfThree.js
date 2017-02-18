//: Проверка на то, является ли переданное число степенью тройки
export const isPowerOfThree = num => {
 let result = 1;
 let countExponent = 0;

 while(result <= num) {

   if (result === num) {
     console.log(`${num} - есть ${countExponent}-ая степень тройки`);
     return true;
   }

   countExponent++;
   result *= 3;
 }

 return false;
};
