new Vue({

    el: '#app',

    data: {
        link1: 'http://localhost/vue-js/new-user.html',
        link2: 'http://localhost/vue-js/index.html',
        firstname: '',
        lastname: ''
    },

    computed: {
        mail: function () {
            return this.firstname + '.' + this.lastname + '@cooperl.fr'
        }
    }
})