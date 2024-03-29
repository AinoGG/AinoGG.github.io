require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from  './modules/tabs';
import timer from  './modules/timer';
import calc from  './modules/calc';
import modal from  './modules/modal';
import slider from  './modules/slider';
import btnMenuSwitch from './modules/menubtn';

window.addEventListener('DOMContentLoaded', () => {

    
    btnMenuSwitch('.menu__btn-list', '.menu__list');
    tabs('.tabs__header-item', '.tabs__content', '.tabs__container', 'tabheader__item_active');
    timer('.timer', '2023-07-22');
    calc();
    modal('[data-modal]', '.modal');
    slider({
        slide: '.offer__slide',
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner',
    });

    


                
});

