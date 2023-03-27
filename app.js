var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

let originalStory;

let userInputs = [];

let numberOfQuestions = 0;

originalStory = `It was a ${userInputs[0]} summer day. ${userInputs[1]} and I were 
excited to go camping at ${userInputs[2]}. It was my first time going there. I packed my 
favourite ${userInputs[3]}. On the road we went in our ${userInputs[4]} ${userInputs[5]} 
car. We were listening to ${userInputs[6]} all the way down. The drive was about 5 hours but 
it was worth it.`;

console.log(originalStory);










// ORIGINAL STORY
// let orgStory = `It was a sunny summer day. Ana and I were excited to go camping at the 
// mountain. It was my first time going there. I packed my favourite tracksuits. On the road 
// we went in our gray big car. We were listening to Lady Gaga all the way down. The drive was 
// about 5 hours but it was worth it.`; 