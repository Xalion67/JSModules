export default str => {
   let leftCase = 0;
   let rightCase = 0;

   const nStr = String(str);

   for (let i = 0; i <= strings.length(nStr) - 1; i++) {
     i < 3 ? leftCase += Number(nStr[i]) : rightCase += Number(nStr[i]);
     }

   return leftCase === rightCase;
 };
