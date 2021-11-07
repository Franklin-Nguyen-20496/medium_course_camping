
$('document').ready(() => {
    $('.header__right--icon').click(() => {
        $('.header__responsive').toggleClass('slide__header');
        $('.header__right--backdrop').toggleClass('d-none');
    })

    $('.header__right--backdrop').click(() => {
        $('.header__responsive').toggleClass('slide__header');
        $('.header__right--backdrop').toggleClass('d-none');
    })

    $('.header__left--link').click((event) => {
        $('.header__left--link').removeClass('active');
        $('.header__left--link').removeClass('text-white');
        $('.header__left--link').addClass('text-light');
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).addClass('text-white');
    })

    $('.btn-click').click((event) => {
        $(event.currentTarget).addClass('active');
        setTimeout(()=> {
            $(event.currentTarget).removeClass('active');
        }, 500)
    })
});