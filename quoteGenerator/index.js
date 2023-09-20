const quoteText = document.querySelector('.quote');
const author = document.querySelector('.name');
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector('.feature__sound');
const copyBtn = document.querySelector('.feature__copy');
const vkBtn = document.querySelector('.feature__vk');

function randomQuote() {
    quoteBtn.classList.add('active');
    quoteBtn.innerText = 'Loading Quote...';
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('active');
    });
}

randomQuote();

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`)
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

vkBtn.addEventListener('click', () => {
    let vkUrl = 'https://vk.com/im?sel=${quoteText.innerText}';
    window.open(vkUrl, '');
})

quoteBtn.addEventListener('click', randomQuote);

