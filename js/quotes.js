const quotes = [
    {
        quote : "초짜 프로그래머 팀장 무서운 줄 모른다.",
        author: "어느 한 개발자1 의 명언"
    },
    {
        quote : "발 없는 오픈소스 천리간다.",
        author: "어느 한 개발자2 의 명언"
    },
    {
        quote : "한줄 코드라도 서로 거들면 낫다.",
        author: "어느 한 개발자3 의 명언"
    },
    {
        quote : "가는 디자인이 좋아야 오는 프로그램이 좋다.",
        author: "어느 한 개발자4 의 명언"
    },
    {
        quote : "소스 잃고 백업장치 구입한다.",
        author: "어느 한 개발자5 의 명언"
    },
    {
        quote : "하룻 프로그래머 정품단속반 무서운 줄 모른다.",
        author: "어느 한 개발자6 의 명언"
    },
    {
        quote : "잘 키운 개발자 열 코더 안 부럽다.",
        author: "어느 한 개발자7 의 명언"
    }
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)])

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author