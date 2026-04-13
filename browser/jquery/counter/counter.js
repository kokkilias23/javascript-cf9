const DEFAULT = 0
let counter = DEFAULT

$(function() {
    $('#btnIncr').on('click', () => onIncreaseClicked())
    $('#btnReset').on('click', () => onResetClicked())
    $('#btnDecr').on('click', () => onDecreaseClicked())
})

// Controllers
function onIncreaseClicked() {
    increaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onDecreaseClicked() {
    decreaseCounter()
}

// Model

function increaseCounter() {
    counter++
    render()
}

function resetCounter() {
    counter = DEFAULT
    render()
}

function decreaseCounter() {
    counter--
    render()
}

// View
function render() {
    const $counter = $('#counter')
    $counter.text(counter)
    styleCounterElement($counter)
}

function styleCounterElement($counter) {
    $counter.toggleClass('color-green', counter > 0)
    $counter.toggleClass('color-red', counter < 0)  
    $counter.toggleClass('color-black', counter === 0)
}