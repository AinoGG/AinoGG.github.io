window.addEventListener('DOMContentLoaded', () => {

    function btnMenuSwitch(btnSelector, btnContent) {
        const menuBtn = document.querySelector(btnSelector),
            socialBtns = document.querySelector(btnContent);


        menuBtn.addEventListener('click', () => {
            if (!socialBtns.classList.contains('show')) {
                socialBtns.classList.add('show', 'fade');
            } else {
                socialBtns.classList.remove('show', 'fade');
            }
        });

    }

    btnMenuSwitch('.btn__menu', '.header__menu');



    // modal windows



    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]'),
          btnSend = document.querySelector('#send');



    function openModal() {

        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(timerModal);

    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';

    }

    modalClose.addEventListener('click', closeModal);
    btnSend.addEventListener('click', closeModal);

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    //   const timerModal = setTimeout(openModal, 5000);

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    function scrollShowModal() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', scrollShowModal);
        }
    }

    window.addEventListener('scroll', scrollShowModal);

});