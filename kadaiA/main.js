const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温が摂氏-5度で外は寒かった。 :insertx: は出かける準備をした。  :inserty: に着いたとき :insertz: 。 :insertv: の :insertx: は信じられない様子であったが、Bobは知らん顔をしていた。また同じような夢をみてしまったのか。';
let insertX = ['オズワルド','マイメロディ','ミッフィー'];
let insertY = ['ディズニーランド','ピューロランド','ミュージアム'];
let insertZ = ['閉園していた','営業できない状態であった','取り壊されていた'];
let insertV = ['筋肉質','頭の大きい','顔色の悪い']

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let vItem = randomValueFromArray(insertV);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertv:',vItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
