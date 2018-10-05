$(function () {
    //When DOM is ready
    $('.top-bar a[href*="#"]').on('click', function (event) {
        event.preventDefault();
        const $target = $(this.hash);
        $('html, body').animate({
            scrollTop: $target.offset().top - $('.top-bar').outerHeight()
        }, 1000, function () {
            console.log('Finished animating', this);
            // $('html').css({
            //     transform: 'rotate(1800000deg)'
            // });
        });
        // .animate({
        //     scrollTop: '+=300'
        // }, 1000)
        // .animate({
        //     opacity: 0.5
        // }, {
        //     duration: 300,
        //     //transform:'rotate(360deg)',
        //     queue: false
        // });

    });

});

const my_array = [65, 'a random string', null, 387];

const myObjcet = {
    name: 'John',
    surname: 'Doe',
    age: 35
}

$.each(my_array, (index, value) => {
    console.log(`l'elemento numero ${index} ha valore ${value}.`)
})

$.each(myObjcet, (key, value) => {
    console.log(`La chiave ${key} ha valore ${value}.`)
});

const squares = [{
    width: 200,
    height: 300,
    backgroundColor: 'red'
}, {
    width: 500,
    height: 300,
    backgroundColor: 'blue'
}, {
    width: 200,
    height: 5100,
    backgroundColor: 'green'
}]

$.each(squares, (index, value) => { $('<div>').css(value).appendTo($('body'));})