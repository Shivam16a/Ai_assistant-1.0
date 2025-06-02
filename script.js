let btn_spk = document.querySelector("#btn-spk")
// let content = document.querySelector("#content")
let assis = document.querySelector("#assis")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir")
    }
    else {
        speak("Good Evening sir")
    }
}

window.addEventListener('load', () => {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    // content.innerHTML = transcript
    takeCommand(transcript.toLowerCase())
}
btn_spk.addEventListener("click", () => {
    recognition.start()
    btn_spk.style.display = "none"
    assis.style.display = "block"
})
function takeCommand(message) {
    btn_spk.style.display = "flex"
    assis.style.display = "none"

    if (message.includes("hello") || message.includes("hi")) {
        speak("hello sir, how can I help you today")
    }
    else if (message.includes("who are you")) {
        speak("I am Pihu a virtual assistant, created by Shivam sir")
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...")
        window.open("https://www.youtube.com/", "_blank")
    } 
    else if (message.includes("open google")) {
        speak("Opening Google...")
        window.open("https://www.google.co.in/", "_blank")
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram...")
        window.open("https://www.instagram.com/", "_blank")
    } 
    else if (message.includes("open facebook")) {
        speak("Opening Facebook...")
        window.open("https://www.facebook.com/", "_blank")
    } 
    else if (message.includes("open calculator")) {
        speak("Opening calculatop...")
        window.open("calculator://")
    }
    else if (message.includes("time")) {
        let time = new Date().toDateString(undefined,{hours:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("time")) {
        let date = new Date().toDateString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else {
        let query = message.replace("shivam", "")
        speak(`I found something on the internet regarding ${query}`)
        window.open(`https://www.google.com/search?q=${query}`, "_blank")
    }
}
