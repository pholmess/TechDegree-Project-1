//A for loop to access each object in the array as a loop
                
for (let i=0; i <quotes.length; i++){
     let randomQuote = Math.floor(Math.random() * (quotes.length - 1)) + 1;
     html +=`
      ${quotes.randomQuote};
      ${quotes.source}|${quotes.citation}|${quotes.year}`;
}

//from Lee on Google


let timer;

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

function printQuote() {
    // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
    // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
    // creates the html variable and uses the currentQuote variable along with key values to build a string
    let currentQuote = getRandomQuote();
    let currentColor = getRandomColor();
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    // tests to see if the date property is present in the currentQuote and if so, adds it to the string
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    html += "<span class='category'> " + currentQuote.category + "</span>";

    // writes the info from the html variable to the div with the quote-box id
    // uses the currentColor variable to change the background color
    // uses the currentColor variable to change the button color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;

    // clears any previous timers that might be running and starts a new one
    clearTimer();
    startTimer();
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);