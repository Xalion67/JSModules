const ackermann = (m, n) => {
    if (m < 0 || n < 0) {
        return console.log("Функция определена только при натуральных аргументах");
    }
    
    if (m === 0) {
        return n + 1;
    } else if (m > 0 && n === 0) {
        return ackermann(m - 1, 1);
    }
    
    return ackermann(m - 1, ackermann(m, n - 1));
    
};
export default ackermann;
