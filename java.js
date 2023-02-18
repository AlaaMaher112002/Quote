const generateQuote=function(){
    const quotes= [
            {
               quote: "You miss 100% of the shots you don't take .",
               author:" -- Frank Zappa",
            },
            {quote:  "To live is the rarest thing in the world. Most people exist, that is all.",
            author:"-- Albert Einstein"
            },
          
            {quote: "Always forgive your enemies; nothing annoys them so much.",
                author:"-- Marilyn Monroe"
                },
           
            {quote: " Live as if you were to die tomorrow. Learn as if you were to live forever .",
                author:"-- Bernard M. Baruch"
                },
           
            {quote:   " Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that .",
                author:"-- William W. Purkey"
                },
    
                {quote: "A room without books is like a body without a soul.",
                author:"-- Marcus Tullius Cicero"
                },
           
            {quote: " Dr. Suess said: 'Don't cry because it's over, smile because it happened.",
                author:"-- josh stern"
                },
           
            {quote:   "Building Your Own Family Is Like A Contractor Without A Labour. ",
                author:"-- Mansah Bi Lartey"
                },

                {quote: " Be yourself; everyone else is already taken",
                author:"-- Oscar Wilde "
                },
           
            {quote:   "So many books, so little time ",
                author:"-- Frank Zappa"
                },
          ];
    
          let arrayIndex = Math.floor(Math.random() * quotes.length);
          document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
          document.getElementById("author").innerHTML =quotes[arrayIndex].author ;
    
    }
window.onload=function(){
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

