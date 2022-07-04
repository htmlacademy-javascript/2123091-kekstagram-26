function getRandomNumberFromRange (firstNumber, lastNumber) {
  firstNumber = Math.ceil(firstNumber);
  lastNumber = Math.floor(lastNumber);
  if (firstNumber < 0 || lastNumber < 0) {throw new Error('Диапазон может быть только положительным');}
  else if (firstNumber > lastNumber) {return Math.floor(Math.random() * (firstNumber - lastNumber + 1) + lastNumber);}
  return Math.floor(Math.random() * (lastNumber - firstNumber + 1) + firstNumber);
}

const checkMaxLength = (text, maxLength) => text.length <= maxLength;

const DESCRIPTIONS = [
  'просто так',
  'красота',
  'я сфоткал',
  'felt cute, might delete later',
  'ну как вам?',
  'вот что сегодня увидел'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Артур',
  'Вася',
  'Дима',
  'Катя',
  'Саша',
  'Миша'
];
//Генератор случайных неповторяющихся чисел из диапазона
function getRandomIdFromRange (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomNumberFromRange (min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumberFromRange(min,max);
    }
    previousValues.push(currentValue);
    return currentValue;};

}
const PhotoId = getRandomIdFromRange(1, 25);
const commentId = 
getRandomIdFromRange(1,200);


//генератор случайного элемента массива
const getRandomArrayElement = (arr) => arr[getRandomNumberFromRange(0, arr.length -1)]
//объект комментария
const createComment = () => ({
    id: commentId(),
    avatar: 'img/avatar-$(getRandomIdFromRange(1, 6)).svg',
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
});
//массив комментариев из разрозненных элементов
const SIMILAR_COMMENTS_COUNT = 4;
const similarComments = Array.from({length: SIMILAR_COMMENTS_COUNT}, createComment);

const createPost = () => ({
    id: PhotoId(),
    url: 'photos/$(getRandomIdFromRange(1, 25)).jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumberFromRange(15, 200),
    comments: similarComments
})
const SIMILAR_POST_COUNT = 25;
const similarPosts = Array.from({length:SIMILAR_POST_COUNT}, createPost);
