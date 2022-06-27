function getRandomNumberFromRange (firstNumber, lastNumber) {
    firstNumber = Math.ceil(firstNumber);
lastNumber = Math.floor(lastNumber);
if (firstNumber < 0 || lastNumber < 0) {throw new Error('Диапазон может быть только положительным')}
else if (firstNumber > lastNumber) {return Math.floor(Math.random() * (firstNumber - lastNumber + 1) + lastNumber)}
return Math.floor(Math.random() * (lastNumber - firstNumber + 1) + firstNumber);
}
console.log(getRandomNumberFromRange(2,10))

const checkMaxLength = (text, maxLength) => text.length <= maxLength