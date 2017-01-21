
moment.locale('de');

var clock = Vue.component('current-time', {
    template: '<div class="text-center">' +
    '<h1 class="big">{{time}} Uhr</h1>' +
    '<div class="progress">'+
    '<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" v-bind:style="{width : progress }">'+
    '</div></div>' +
    '<p class="lead">{{date}}</p>' +
    '</div>',
    created: function () {

        var clock = this;
        setInterval(function () {
            clock.time = moment().format("HH:mm");
            clock.day = moment().format("dddd, DD. MMMM YYYY");
            clock.progress = moment().format("ss")*1.7+"%";


        },1000)

    },
    data: function () {
        return {
            time: moment().format("HH:mm"),
            date: moment().format("dddd, DD. MMMM YYYY"),
            progress: moment().format("ss")*1.7+"%",

    }
    }
})

new Vue({
    el: '#app',
    data: {
        message: "Hallo Dominik"
    },

});

