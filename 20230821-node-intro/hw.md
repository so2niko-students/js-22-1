**Задача**
Напишіть код серверної аплікації, яка буде приймати в якості URL-адреси два числа та повертати суму цих чисел. 
*Приклад роботи*
`http://localhost:8080/3/44` --> 47
`http://localhost:8080/23/4` --> 27
`http://localhost:8080/-223/23` --> -200
`http://localhost:8080/300/0` --> 300
`http://localhost:8080/` --> First argument is not a number
`http://localhost:8080/ddd/44` --> First argument is not a number
`http://localhost:8080/3/` --> Second argument is not a number
`http://localhost:8080/3/rr` --> Second argument is not a number
`http://localhost:8080/30/10/3333` --> 40
`http://localhost:8080/3/12/33/33/45666/11/-67` --> 15

*Приклад аплікації з заняття*

```
const http = require('http');
const PORT = 8080;

const serverFunc = (req, res) => {
  console.log("Server: In");
  console.log(req.url);

  const errorAnswers = {
    nan: 'Problem with input number',
    overLimit: "The number is too big",
    unknown:'Unknown input'
  };
  let answer = errorAnswers.unknown;
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const urlParts = req.url.split('/');
  const input = parseInt(urlParts[1]); 

  if (isNaN(input)) {
    answer = errorAnswers.nan;
  }
  if (input > 30) {
    answer = errorAnswers.overLimit;
  } 
  if(input >=0 && input<=30){
    answer = 2**input;
  }
  res.end(String(answer));
  console.log("Server: OUT");
};

http.createServer(serverFunc).listen(PORT);

console.log("Server: Start");
```