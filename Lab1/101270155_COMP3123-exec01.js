function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const inputString = "the quick brown fox";
const inputString2 = "how was ur day";
const capitalizedString = capitalizeWords(inputString);
const capitalizedString2 = capitalizeWords(inputString2);

console.log(capitalizedString);
console.log(capitalizedString2);




function findMaxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(findMaxOfThree(1, 0, 1));
console.log(findMaxOfThree(0, -10, -20));
console.log(findMaxOfThree(1000, 510, 440));


