

function btnMenuSwitch(btnSelector, btnContent) {
    const menuBtn = document.querySelector(btnSelector),
        socialBtns = document.querySelector(btnContent);


    menuBtn.addEventListener('click', () => {
        if (!socialBtns.classList.contains('show')) {
            socialBtns.classList.add('show');
        } else {
            socialBtns.classList.remove('show');
        }
    });

}

btnMenuSwitch('.menu__btn', '.menu');