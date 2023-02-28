let hr = $('#hr');
let min = $('#min');
let sec = $('#sec');
let real = $('.real');

let clock = function () {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hr.css({
        'transform': `rotateZ(${hh + (mm / 12)}deg)`,
        'transition':'0.7s'
    });
    min.css({
        'transform': `rotateZ(${mm}deg)`,
        'transition':'0.7s'
    });
    sec.css({
        'transform': `rotateZ(${ss}deg)`,
        'transition':'0.7s'
    });

}

setInterval(clock)