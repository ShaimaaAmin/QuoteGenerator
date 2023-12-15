var arrQuoteContent=[`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
`“Doubt kills more dreams than failure ever will.” 
– Suzy Kassem`,
`“Keep your face always toward the sunshine, and shadows will fall behind you.” 
– Walt Whitman`,`“Whether you think you can or think you can’t, you’re right.” 
– Henry Ford`,`“Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.” —Lou Holtz`,`“The happiness of your life depends on the quality of your thoughts.” – Marcus Aurelius`,`“You are who you are meant to be. Dance as if no one’s watching. Love as if it’s all you know. Dream as if you’ll live forever. Live as if you’ll die today.” James Dean`,`“You do not find the happy life. You make it.”— Camilla Eyring Kimball`,`“You’ve gotta dance like there’s nobody watching, Love like you’ll never be hurt, Sing like there’s nobody listening, And live like it’s heaven on earth.”― William W. Purkey`,`“Happiness is not something readymade. It comes from your own actions.”-Dalai Lama`,`“Folks are usually about as happy as they make up their minds to be.” – Abraham Lincoln`,`“Life is what happens to us while we are making other plans.”― Allen Saunders`,`“Life isn’t about finding yourself. Life is about creating yourself.”― George Bernard Shaw`,`“So many books, so little time.”
― Frank Zappa`,`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`]


function fnNewQuote(){
  var randomIndex = Math.floor(Math.random()* arrQuoteContent.length);
  document.getElementById("id-quoteContent").innerText = arrQuoteContent[randomIndex];
}

