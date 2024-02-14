export default function Slider(arr) {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "slider",
        IMG_SRC = "./images/";
    const $template = document.getElementById(COMPONENT_NAME + "-template").content,
        $slider = document.importNode($template, true);
    const $container = $slider.querySelector("[data-container]"),
        $quote = $slider.querySelector("[data-quote]"),
        $name = $slider.querySelector("[data-name]"),
        $label = $slider.querySelector("[data-label]"),
        $content = $slider.querySelector("[data-content]"),
        $prev = $slider.querySelector("[data-prev]"),
        $next = $slider.querySelector("[data-next]");
    const $fragment = document.createDocumentFragment();
    let indicator = 0;

    // *** *** *** Functions *** *** ***
    const matches = (evt, elm) => evt.target.matches("." + elm.classList[0] + " *") || evt.target === elm;
    const prev = () => (indicator !== 0) && (indicator --);
    const next = () => (indicator < arr.length - 1) && (indicator ++);
    const set = () => {
        $container.dataset.slide = indicator + 1;
        $content.style.transform = `translateX(-${indicator * 100}%)`;
        $quote.textContent = "“ " + arr[indicator].quote + " ”";
        $name.textContent = arr[indicator].name;
        $label.textContent = arr[indicator].label;
    };

    // *** *** *** Execution *** *** ***
    arr.forEach(elm => {
        let $img = document.createElement("img");
        $img.src = IMG_SRC + elm.img;
        $img.alt = elm.name;
        $fragment.append($img);
    });
    $content.append($fragment);
    set();
    document.addEventListener("click", evt => {
        if(matches(evt, $prev)) { prev() } 
        else if (matches(evt, $next)) { next() };
        set();
    });
    return $slider;
};
