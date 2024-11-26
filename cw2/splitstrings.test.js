function solution(str) {
    if (! str) return [];
    if(str.length === 1) return [str+'_']
    re = /(..)/g
    const result = str.match(re);
    if (str.length % 2 !== 0) {
        result.push(str[str.length - 1]+'_');
    }   
    return result
}

console.log(solution('')) // ['ab', 'c']
console.log(solution('a')) // ['ab', 'cd', 'ef']
console.log(solution('abcdefg')) // ['ab', 'cd', 'ef', 'g']
