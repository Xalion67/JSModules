const reverse = str => {
  let i = str.length - 1;
  let acc = '';
    const iter = (current, acc) => {
      current === -1 ? acc : iter(current - 1, acc += str[current]);
    }
    return iter(i, acc);
}
