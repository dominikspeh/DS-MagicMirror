
moment.locale('de');

var clock = Vue.component('current-time', {
    template: '<div>' +
    '<h1 class="big">{{time}} Uhr</h1>' +
    '<p class="lead">{{date}}</p>' +
    '<span></span>' +
    '</div>',
    created: function () {

        var clock = this;
        setInterval(function () {
            clock.time = moment().format("HH:mm");
            clock.day = moment().format("dddd, DD. MMMM YYYY")

        },1000)

    },
    data: function () {
        return {
            time: moment().format("HH:mm"),
            date: moment().format("dddd, DD. MMMM YYYY")
        }
    }
})

new Vue({
    el: '#app',
    data: {
        message: "Hallo Dominik"
    },

});

