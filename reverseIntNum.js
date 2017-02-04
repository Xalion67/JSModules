export const reverseInt = num => {
   // преобразование полученного числа в строку и
   // переменной хранящей перевернутое число в строком формате
   let str = String(num);
   let reverseIntNum = '';

   //cornerCase(если число отрицательное)
   if (str[0] === '-') reverseIntNum += '-';

    for (let i = strings.length(str) - 1; i >= 0; i--) {
      //cornerCase(если при перевороте снова встретили знак '-')
      str[i] === '-' ? reverseIntNum : reverseIntNum += str[i];
      }
   console.log(reverseIntNum);
   // возвращаем перевернутое число(преобразовывая его из полученной строки)
   return Number(reverseIntNum);
 };
