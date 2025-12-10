
const messages = [];

const book1 = ["Do IT TODAY NOT TOMMOROW",
    "focus on your life , think about what matters to you",
    "Prorastination always statrs with just one thing",
    "If you are productive than average people, you'll advance faster in your career",
    "rules are actually best thing about life",
    "What you repeat every day shapes your future.",
    "Small consistent actions beat big occasional efforts.",
    "If it matters to my future, I’ll start it today.",
    "Less talking, more doing. Starting now.",
    "My future self is watching what I do today.",
    "Procrastination off. Action mode on.",
    "Tiny actions today, massive results tomorrow.",
    "Focus, act, repeat. That’s the plan.",
    "I’m designing my future one day at a time.",
    "No more ‘tomorrow’. It starts today.",
    "Dreams are easy. Daily work is the real game.",
    "My priority today: do the thing I keep postponing."
]

generateMessage = book =>{
    let quoteIndex = Math.floor( Math.random() * book.length);
    let quote = book[quoteIndex];
    return quote.toUpperCase();
}

console.log(generateMessage(book1));