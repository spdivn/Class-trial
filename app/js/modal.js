//Modal class

class Modal {
    constructor(target, fallback) {
        this.$modal = $(target);
        // this.$warning = (fallback) ? $(fallback) : null;

        this.$wrapper = this.$modal.closest('.modal');
        this.$loader = this.$modal.siblings('.modal__loader');
        this.isOpened = false;

        this.$wrapper.on('click', event => {
            event.preventDefault();
            this.close();
        });

        this.$modal.on('click', event => {
            event.stopPropagation();
        })

        this.$modal.find('.modal__close , .modal__button')
            .on('click', event => {
                event.preventDefault();
                this.close();
            });
    }

    open() {
        this.$loader.hide();
        this.$modal.slideDown();
        this.isOpened = true;
    }

    close() {
        if (this.isOpened) {
            this.$loader.hide();
            this.$modal.slideUp();
            this.$wrapper.fadeOut();
            this.isOpened = false;
        }
    }

    // load() {
    //     this.$loader.show();
    //     this.$wrapper.fadeIn();
    //     $.ajax('//www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=2000ms')
    //         .done(response => {
    //             this.open();
    //         })
    //         .fail(error => {
    //             // if (this.$warning) {
    //             //     if (this.$warning.length) {
    //             //         this.$loader.hide();
    //             //         this.$warning.show();
    //             //     }
    //             // }
    //             console.log(error);
    //         })
    //         .always(() => {
    //             this.$loader.hide();
    //         })
    // }

}

$(document).ready(function () {
    const modalInfo = new Modal('#modal__info', '#modal__warning');
    const modalWarning = new Modal('#modal__warning');

    $('#info').on('click', event => {
        event.preventDefault();
        $('.modal').fadeIn();
        $('.modal__loader').show();

        $.ajax('//www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=2000ms')
            .done(response => {
                modalInfo.open();
            })
            .fail(error => {
                modalWarning.open();
                console.log(error);
            })
            .always(() => {
                $('.modal__loader').hide();
            })
    });

    $('#warning').on('click', event => {
        event.preventDefault();
        $('.modal').fadeIn();
        $('.modal__loader').show();
        modalWarning.open();
    });

});