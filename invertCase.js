 import * as strings from './strings';


 export const invertCase = str => {
   let resultStr = '';
   for (let i = 0; i < strings.length(str); i++) {
     str[i] === strings.toUpperCase(str[i]) ? resultStr += strings.toLowerCase(str[i]) : resultStr += strings.toUpperCase(str[i]);
   }
   console.log(resultStr);

   return resultStr;
 };
