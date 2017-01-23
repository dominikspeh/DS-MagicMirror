
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

var fuelCost = Vue.component('fuel', {
    template: '' +
    ' <div id="fuel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="10000">' +
    '   <div class="carousel-inner">' +
    '       <div class="item text-center" v-bind:class="{active: index==1}" v-for="station, index in data" v-if="index < 5">' +
    '           <article >' +
    '               <h4>{{station.brand}} {{station.place}}</h4>' +
    '               <p class="fa fa-money">' +
    '                   <span>{{station.price}} €</span>' +
    '               </p>' +
    '               <p class="fa fa-map-marker">' +
    '                   <span>{{station.dist}} km</span>' +
    '               </p>' +
    '               <p v-if="index == 1">Günstigster Preis</p>' +
    '           </article>' +
    '       </div>' +
    '   </div>' +
    '</div>',

    created: function () {
        var fuel = this;

        fuel.reload();


        setInterval(function () {
            fuel.reload();
        }, newsfeed.autoRefresh);
    },

    methods: {
        reload: function () {
            var fuel = this;
            var options = {
                params: {
                    lat: 48.016016,
                    lng: 9.250637,
                    gas: 'e10',
                    radius: 15,
                }
            };

            fuel.$http.get('/fuel', options).then((response) => {
                fuel.data = response.body.stations;
                console.log(fuel.data);


            }, (response) => {
                console.log("ERROR LOADING FUELDATA")
            });
        }

    },

    data: function () {
        return {
            data : "Lädt ...",

        }
    }


})

var news = Vue.component('newsticker-one', {
    template: '' +
    ' <div id="newsfeed" class="carousel slide carousel-fade" data-ride="carousel" data-interval="20000">' +
    '   <div class="carousel-inner">' +
    '       <div class="item text-center" v-bind:class="{active: index==1}" v-for="news, index in newsData" v-if="index < 10">' +
    '           <img class="feedlogo" v-bind:src="logo"/>' +
    '           <article >' +
    '               <h4>{{news.title}}</h4>' +
    '               <p>{{news.description.replace(/(<([^>]+)>)/ig," ").substring(0, 300)}} <a v-bind:href="news.url">[...]</a></p>' +
    '           </article>' +
    '       </div>' +
    '   </div>' +
    '</div>',

    created: function () {
        var news = this;

        news.reload();


        setInterval(function () {
            news.reload();
        }, newsfeed.autoRefresh);
    },

    methods: {
        reload: function () {
            var news = this;
            news.$http.get('/news').then((response) => {
                news.newsData = response.body.feed.items;
                news.logo = response.body.logo;


            }, (response) => {
                console.log("ERROR LOADING NEWSDATA")
            });
        }

    },

    data: function () {
        return {
            newsData : "Lädt ...",
            logo : "",


        }
    }


})

var news2 = Vue.component('newsticker-two', {
    template: '' +
    ' <div id="newsfeed" class="carousel slide carousel-fade" data-ride="carousel" data-interval="20000">' +
    '   <div class="carousel-inner">' +
    '       <div class="item text-center" v-bind:class="{active: index==1}" v-for="news, index in newsData" v-if="index < 10">' +
    '           <img class="feedlogo" v-bind:src="logo"/>' +
    '           <article >' +
    '               <h4>{{news.title}}</h4>' +
    '               <p>{{news.description.replace(/(<([^>]+)>)/ig," ").substring(0, 300) || news.summary.replace(/(<([^>]+)>)/ig," ").substring(0, 300)}} <a v-bind:href="news.url">[...]</a></p>' +
    '           </article>' +
    '       </div>' +
    '   </div>' +
    '</div>',

    created: function () {
        var news = this;

        news.reload();


        setInterval(function () {
            news.reload();
        }, newsfeed.autoRefresh);
    },

    methods: {
        reload: function () {
            var news = this;
            news.$http.get('/news/vfb').then((response) => {
                news.logo = response.body.logo;
                news.newsData = response.body.feed.items;


            }, (response) => {
                console.log("ERROR LOADING NEWSDATA")
            });
        }

    },

    data: function () {
        return {
            newsData : "Lädt ...",
            logo: "",

        }
    }


})


new Vue({
    el: '#app',
    data: {
        message: "Hallo Dominik"
    },
    mounted: function () {

    }

});

