const VARIATION = 200;

const DEFAULT_TEXT = "No inner text found";

function unblur(elementId) {
    let htmlElement = document.getElementById(elementId)
    let taggedText = "";

    let txt = DEFAULT_TEXT
    if (document.getElementById(elementId) !== null) {
        txt = document.getElementById(elementId).innerText;
    }

    for (let i = 0; i < txt.length; i++) {
        const element = txt[i];
        taggedText += `<span>${element}</span>`;
    }

    htmlElement.innerHTML = taggedText

    let spans = htmlElement.children

    for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        span.classList.add("text-animation-initial-state");

        if (span.innerHTML === " ") {
            continue;
        }

        let padding = Math.abs((spans.length) - i) * 0.1;

        let randomVariation = Math.floor(Math.random() * VARIATION + i * 50);
        span.style.padding = padding + "px";

        setTimeout(() => {
            span.classList.add("animate_padding");
            span.classList.add("animate_blur");
            span.classList.remove("text-animation-initial-state");
        }, randomVariation);
    }
}

function disappear(elementId) {
    let htmlElement = document.getElementById(elementId)
    let taggedText = "";

    let txt = DEFAULT_TEXT
    if (document.getElementById(elementId) !== null) {
        txt = document.getElementById(elementId).innerText;
    }

    for (let i = 0; i < txt.length; i++) {
        const element = txt[i];
        taggedText += `<span>${element}</span>`;
    }

    htmlElement.innerHTML = taggedText

    let spans = htmlElement.children

    for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        span.classList.add("disappear-initial-state");

        if (span.innerHTML === " ") {
            continue;
        }

        let randomVariation = Math.floor(Math.random() * VARIATION + i * 50);

        setTimeout(() => {
            span.classList.add("add_blur");
        }, randomVariation);
    }
}

function restartAnimation(elementId) {
    setTimeout(() => {
        unblur(elementId)
    }, 1250);

    disappear(elementId)
}