
var quote=[
 "<p> “Be yourself; everyone else is already taken.” </p><p>--Oscar Wilde</p>",
 "<p> “Resentment is like drinking poison and waiting for your enemies to die.”</p> <p>--Nelson Mandela</p>",
 "<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p> <p>-- Albert Einstein</p>",
"<p>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</p> <p>-- Dr. Seuss</p>",
"<p>“In three words I can sum up everything I've learned about life: it goes on.”</p> <p>-- Robert Frost</p>"
  ];
  function generateQuote(){
    document.getElementById('quoteOutput').innerHTML=(quote[ Math.floor(Math.random()* quote.length)]);
  }

// var history=[];
// function generateQuote(){
//   var randomNum=quote[ Math.floor(Math.random()* quote.length)];
//   // document.getElementById('quoteOutput').innerHTML=(randomNum);
//   history.push(randomNum);
//   if (history.includes(randomNum)){
//     generateQuote();

//   }
//   else{
//     document.getElementById('quoteOutput').innerHTML=(randomNum);
//     history.push(randomNum);
//   }
// }

