var vh = window.innerHeight;
var vw = window.innerWidth;
var closePositionHeight = 0;

var logo = document.getElementById("logo");
logo.style.position = "absolute";
logo.style.zIndex = "1";
var logoHeight = logo.offsetHeight;
var logoWidth = logo.offsetWidth;
var logoPositionWidth = 0;
var logoPositionHeight = 0;

var quote = document.getElementById("quote");
quote.style.position = "absolute";
quote.style.zIndex = "1";
quote.style.color = "white";
quote.style.fontFamily = "Playfair Display, serif";
quote.style.textAlign = "center";
quote.style.textShadow = "1px 1px 7px rgba(0, 0, 0, 1)";
var quoteHeight = quote.offsetHeight;
var quoteWidth = quote.offsetWidth;
var quotePositionWidth = 0;
var quotePositionHeight = 0;
var quoteSize = 0;


var subQuote = document.getElementById("subquote");
subQuote.style.position = "absolute";
subQuote.style.zIndex = "1";
subQuote.style.color = "white";
subQuote.style.fontFamily = "Playfair Display, serif";
subQuote.style.textAlign = "center";
subQuote.style.textShadow = "1px 1px 7px rgba(0, 0, 0, 1)";
var subQuoteHeight = quote.offsetHeight;
var subQuoteWidth = quote.offsetWidth;
var subQuotePositionWidth = 0;
var subQuotePositionHeight = 0;
var quoteSize = 0;


var cs = document.getElementById("coming-soon");
cs.style.position = "absolute";
cs.style.zIndex = "1";
cs.style.color = "white";
cs.style.fontFamily = "Karla, sans-serif";
cs.style.textAlign = "center";
cs.style.textShadow = "1px 1px 7px rgba(0, 0, 0, 1)";
var csHeight = cs.offsetHeight;
var csWidth = cs.offsetWidth;
var csPositionWidth = 0;
var csPositionHeight = 0;
var csSize = 0;


layoutGen();

function layoutGen() {

    if (vw <= 320 ) {
        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 20;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 3;
            quote.style.fontSize = "1.2em";
            subQuote.style.fontSize = "1.2em";
            cs.style.top = (vh - csPositionHeight) / 1.75 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2.25 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw;
            quotePositionWidth = vw * 1.2;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 10;
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 3.3 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.3 + "px";
            logo.style.top = (vw - logoPositionHeight) / 3.5 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.1 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) * 1.5 + "px";
            quote.style.top = (quotePositionHeight - 20) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.15 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            close.style.top = (vw - closeWidth) / 2 + "px";
            close.style.left = vh + "px";
        }

    } else if (vw <= 375) {

        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 12;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 2.5;
            quote.style.fontSize = "1.3em";
            subQuote.style.fontSize = "1.3em";
            cs.style.top = (vh - csPositionHeight) / 1.6 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            
        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.4;
            csPositionWidth = vw;
            quotePositionWidth = vw * 1.4;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw / 1.4;
            subQuotePositionHeight = vh / 14;
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 4.5 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.5 + "px";
            logo.style.top = (vw - logoPositionHeight) / 5 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.4 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) * 1.5 + "px";
            quote.style.top = (quotePositionHeight - 20) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.6 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            //close.style.top = (vw - closeWidth) / 2 + "px";
            //close.style.left = vh + "px";
        }
    } else if (vw <= 425) {



        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 12;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 2.5;
            quote.style.fontSize = "1.35em";
            subQuote.style.fontSize = "1.35em";
            cs.style.top = (vh - csPositionHeight) / 1.55 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";


        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 6.5;
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 2.75 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.3 + "px";
            logo.style.top = (vw - logoPositionHeight) / 2.85 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.1 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) / 1.15 + "px";
            quote.style.top = (quotePositionHeight - 20) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.15 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            //close.style.top = (vw - closeWidth) / 2 + "px";
            //close.style.left = vh + "px";
        }
    }
    else if (vw <= 580) {

        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 1.75;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 12;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 2.5;
            quote.style.fontSize = "1.4em";
            subQuote.style.fontSize = "1.4em";
            cs.style.top = (vh - csPositionHeight) / 1.5 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            
        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw * 1.5;
            quotePositionWidth = vw ;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw;
            subQuotePositionHeight = vh / 10;
            quote.style.fontSize = "1.4em";
            subQuote.style.fontSize = "1.4em";
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 4 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.6 + "px";
            logo.style.top = (vw - logoPositionHeight) / 4 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.1 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) / 1.6 + "px";
            quote.style.top = (quotePositionHeight) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.6 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            //close.style.top = (vw - closeWidth) / 2 + "px";
            //close.style.left = vh + "px";
        }
    }
    else if (vw <= 640) {
        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 2.5;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 12;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 2.5;
            quote.style.fontSize = "1.3em";
            subQuote.style.fontSize = "1.3em";
            cs.style.top = (vh - csPositionHeight) / 1.5 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            
        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 6.5;
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 2.75 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.3 + "px";
            logo.style.top = (vw - logoPositionHeight) / 2.85 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.1 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) / 1.15 + "px";
            quote.style.top = (quotePositionHeight - 20) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.15 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            //close.style.top = (vw - closeWidth) / 2 + "px";
            //close.style.left = vh + "px";
        }
    }

    else if (vw <= 768) {
        if (window.orientation == 0) {
            quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
            logoPositionWidth = vw / 3;
            csPositionWidth = vw / 1.125;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 12;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 2.5;
            quote.style.fontSize = "1.25em";
            subQuote.style.fontSize = "1.25em";
            cs.style.top = (vh - csPositionHeight) / 1.5 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vw - logoPositionWidth) / 2 + "px";
            logo.style.top = (vh - logoPositionHeight) / 2 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vw - csPositionWidth) / 2 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vw - quotePositionWidth) / 2 + "px";
            quote.style.top = quotePositionHeight + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

        } else if (window.orientation == 90 || window.orientation == -90) {
            quote.innerHTML = "As Aisha waits for Priya, the flutters guide her.";
            logoPositionWidth = vw / 1.5;
            csPositionWidth = vw;
            quotePositionWidth = vw / 1.125;
            quotePositionHeight = vh / 32;
            subQuotePositionWidth = vw / 1.125;
            subQuotePositionHeight = vh / 6.5;
            quote.style.fontSize = "1em";
            subQuote.style.fontSize = "1em";
            cs.style.top = (vh - csPositionHeight) / 2.75 + "px";

            logo.style.display = "block";
            logo.style.width = logoPositionWidth + "px";
            logo.style.left = (vh - logoPositionWidth) / 1.3 + "px";
            logo.style.top = (vw - logoPositionHeight) / 2.85 + "px";

            cs.style.display = "block";
            cs.style.width = csPositionWidth + "px";
            cs.style.left = (vh - csPositionWidth) / 1.1 + "px";

            quote.style.display = "block";
            quote.style.width = quotePositionWidth + "px";
            quote.style.left = (vh - quotePositionWidth) / 1.15 + "px";
            quote.style.top = (quotePositionHeight - 20) + "px";

            subQuote.style.display = "block";
            subQuote.style.width = subQuotePositionWidth + "px";
            subQuote.style.left = (vh - subQuotePositionWidth) / 1.15 + "px";
            subQuote.style.top = subQuotePositionHeight + "px";

            //close.style.top = (vw - closeWidth) / 2 + "px";
           // close.style.left = vh + "px";
        }
    }
    else if (vw <= 960) {
        quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
        logoPositionWidth = vw / 3;
        csPositionWidth = vw / 2.5;
        quotePositionWidth = vw / 2.5;
        quotePositionHeight = vh / 12;
        subQuotePositionWidth = vw / 2.5;
        subQuotePositionHeight = vh / 2.5;
        quote.style.fontSize = "1.25em";
        subQuote.style.fontSize = "1.25em";
        cs.style.top = (vh - csPositionHeight) / 1.45 + "px";

        logo.style.display = "block";
        logo.style.width = logoPositionWidth + "px";
        logo.style.left = (vw - logoPositionWidth) / 2 + "px";
        logo.style.top = (vh - logoPositionHeight) / 2 + "px";

        cs.style.display = "block";
        cs.style.width = csPositionWidth + "px";
        cs.style.left = (vw - csPositionWidth) / 2 + "px";

        quote.style.display = "block";
        quote.style.width = quotePositionWidth + "px";
        quote.style.left = (vw - quotePositionWidth) / 2 + "px";
        quote.style.top = quotePositionHeight + "px";

        subQuote.style.display = "block";
        subQuote.style.width = subQuotePositionWidth + "px";
        subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
        subQuote.style.top = subQuotePositionHeight + "px";

        
    } else if (vw <= 1024) {
        quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
        logoPositionWidth = vw / 3;
        csPositionWidth = vw / 3.5;
        quotePositionWidth = vw / 3.5;
        quotePositionHeight = vh / 12;
        subQuotePositionWidth = vw / 3.5;
        subQuotePositionHeight = vh / 2.5;
        quote.style.fontSize = "1.65em";
        subQuote.style.fontSize = "1.65em";
        cs.style.top = (vh - csPositionHeight) / 1.55 + "px";
        cs.style.fontSize = "1.1em";
        noVR.style.fontSize = "1.1em";

        logo.style.display = "block";
        logo.style.width = logoPositionWidth + "px";
        logo.style.left = (vw - logoPositionWidth) / 2 + "px";
        logo.style.top = (vh - logoPositionHeight) / 2 + "px";

        cs.style.display = "block";
        cs.style.width = csPositionWidth + "px";
        cs.style.left = (vw - csPositionWidth) / 2 + "px";

        quote.style.display = "block";
        quote.style.width = quotePositionWidth + "px";
        quote.style.left = (vw - quotePositionWidth) / 2 + "px";
        quote.style.top = quotePositionHeight + "px";

        subQuote.style.display = "block";
        subQuote.style.width = subQuotePositionWidth + "px";
        subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
        subQuote.style.top = subQuotePositionHeight + "px";
    } else if (vw <= 1346) {
        quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
        logoPositionWidth = vw / 3;
        csPositionWidth = vw / 3.5;
        quotePositionWidth = vw / 3.5;
        quotePositionHeight = vh / 12;
        subQuotePositionWidth = vw / 3.5;
        subQuotePositionHeight = vh / 2.5;
        quote.style.fontSize = "1.65em";
        subQuote.style.fontSize = "1.65em";
        cs.style.top = (vh - csPositionHeight) / 1.5 + "px";
        cs.style.fontSize = "1.1em";

        logo.style.display = "block";
        logo.style.width = logoPositionWidth + "px";
        logo.style.left = (vw - logoPositionWidth) / 2 + "px";
        logo.style.top = (vh - logoPositionHeight) / 2 + "px";

        cs.style.display = "block";
        cs.style.width = csPositionWidth + "px";
        cs.style.left = (vw - csPositionWidth) / 2 + "px";

        quote.style.display = "block";
        quote.style.width = quotePositionWidth + "px";
        quote.style.left = (vw - quotePositionWidth) / 2 + "px";
        quote.style.top = quotePositionHeight + "px";

        subQuote.style.display = "block";
        subQuote.style.width = subQuotePositionWidth + "px";
        subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
        subQuote.style.top = subQuotePositionHeight + "px";
    } else if (vw <= 1440) {
        quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
        logoPositionWidth = vw / 4;
        csPositionWidth = vw / 4;
        quotePositionWidth = vw / 4;
        quotePositionHeight = vh / 12;
        subQuotePositionWidth = vw / 4;
        subQuotePositionHeight = vh / 2.45;
        quote.style.fontSize = "1.7em";
        subQuote.style.fontSize = "1.7em";
        cs.style.top = (vh - csPositionHeight) / 1.6 + "px";
        cs.style.fontSize = "1.2em";
        noVR.style.fontSize = "1.2em";

        logo.style.display = "block";
        logo.style.width = logoPositionWidth + "px";
        logo.style.left = (vw - logoPositionWidth) / 2 + "px";
        logo.style.top = (vh - logoPositionHeight) / 2 + "px";

        cs.style.display = "block";
        cs.style.width = csPositionWidth + "px";
        cs.style.left = (vw - csPositionWidth) / 2 + "px";

        quote.style.display = "block";
        quote.style.width = quotePositionWidth + "px";
        quote.style.left = (vw - quotePositionWidth) / 2 + "px";
        quote.style.top = quotePositionHeight + "px";

        subQuote.style.display = "block";
        subQuote.style.width = subQuotePositionWidth + "px";
        subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
        subQuote.style.top = subQuotePositionHeight + "px";

    } else {
        quote.innerHTML = "As Aisha waits for Priya, <br/>the flutters guide her.";
        logoPositionWidth = vw / 4;
        csPositionWidth = vw / 4;
        quotePositionWidth = vw / 4;
        quotePositionHeight = vh / 12;
        subQuotePositionWidth = vw / 4;
        subQuotePositionHeight = vh / 2.4;
        quote.style.fontSize = "3em";
        subQuote.style.fontSize = "3em";
        cs.style.top = (vh - csPositionHeight) / 1.65 + "px";
        cs.style.fontSize = "2em";
        noVR.style.fontSize = "2em";

        logo.style.display = "block";
        logo.style.width = logoPositionWidth + "px";
        logo.style.left = (vw - logoPositionWidth) / 2 + "px";
        logo.style.top = (vh - logoPositionHeight) / 2 + "px";

        cs.style.display = "block";
        cs.style.width = csPositionWidth + "px";
        cs.style.left = (vw - csPositionWidth) / 2 + "px";

        quote.style.display = "block";
        quote.style.width = quotePositionWidth + "px";
        quote.style.left = (vw - quotePositionWidth) / 2 + "px";
        quote.style.top = quotePositionHeight + "px";

        subQuote.style.display = "block";
        subQuote.style.width = subQuotePositionWidth + "px";
        subQuote.style.left = (vw - subQuotePositionWidth) / 2 + "px";
        subQuote.style.top = subQuotePositionHeight + "px";

    }
}
