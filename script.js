/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Sherri Holmes

//Declaring my HTML variable                      
let html='';
                                        
//This is my array of quotes

const quotes = [{
	quote: 'I’m not superstitious, but I am a little stitious',
	source: 'Michael Scott',
	citation: 'The Office',
	year: '2017'
},
                
 {
	quote: 'Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that              path.',
	source: 'Ellen DeGeneres',
	citation: 'The Ellen Degeneres Show',
	year: '2015'
}, 
                
{
	quote: 'Common sense is like deodorant. The people who need it most never use it.',
	source: 'Anonymous',
	citation: 'The White House',
	year: '1893'
}, 
                
{
	quote: 'A day without sunshine is like, you know, night.',
	source: 'Steve Martin',
	citation: 'Saturday Night Live',
	year: '1990'
}, 
                
{
	quote: 'I remember it like it was yesterday. Of course, I don’t really remember yesterday all that well.',
	source: 'Dory',
	citation: 'Finding Nemo',
	year: '2016'
}, 
                 
{
	quote: 'I like long walks, especially when they are taken by people who annoy me.',
	source: 'Noel Coward',
	citation: 'Time Magazine',
	year: '2020'
}                 
];
                
 
//This is my getRandomQuote function

function getRandomQuote() {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
 	return quotes[randomNumber];
}


// This is my printQuote function
                                                   
function printQuote(){
	var currentQuote = getRandomQuote();
	var html = "<p class='quote'>" + currentQuote.quote + "</p>";
  html += "<p class='source'>" + currentQuote.source;
		
  
//Conditional if statements for citation and year
  
if ("citation" in currentQuote){
    html += "<span class='citation'>" + currentQuote.citation + "</span>";
}
  
if ("year" in currentQuote) {
    html += "<span class='year'>" + currentQuote.year + "</span>" + "</p>"
}; 

  
// Transfers info from the html variable to the quote-box

document.getElementById("quote-box").innerHTML = html;
}
   
//Runs the printQuote function so quotes print to page

printQuote();

  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);