import Slider from "./components/Slider.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        Slider([
            {
                name: "Tanya Sinclair",
                label: "UX Engineer",
                quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
                img: "image-tanya.jpg"
            },
            {
                name: "John Tarkpor",
                label: "Junior Front-end Developer",
                quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
                img: "image-john.jpg"
            },
            {
                name: "Tanya Sinclair",
                label: "UX Engineer",
                quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
                img: "image-tanya.jpg"
            },
            {
                name: "John Tarkpor",
                label: "Junior Front-end Developer",
                quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
                img: "image-john.jpg"
            }
        ])
    );
});
