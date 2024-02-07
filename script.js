const noButton = document.getElementById('no-button');

const yesButton = document.getElementById('yes-button');

noButton.style.position = 'absolute';

noButton.addEventListener("mouseover", () => {
    noButton.style.left = null;

    let newHorizontal = Math.random() * 1300 ;
    let newVertical = Math.random() * 500;

    console.log(newHorizontal);
    console.log(newVertical);

    noButton.style.top = newVertical + 'px';
    noButton.style.right = newHorizontal + 'px';

    console.log(window.getComputedStyle(noButton).getPropertyValue('right'));
    console.log(window.getComputedStyle(noButton).getPropertyValue('top'));

})

yesButton.addEventListener("click", () => {
    window.open('giphy.gif');
})

