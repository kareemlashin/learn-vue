export const all = {
    data() {
        return {
            passsTochild: {
                name: 'fromparentalllllll',
            },
            z: '',
            text: 'lorem',
            news: ["one", "two", "three", "four", "f", "f", "f", "f"]

        }
    },
    filters: {
        toLowerCase(value) {
            return value.toUpperCase();
        },

    },
    methods: {
        filterall() {
            this.news =
                this.news.filter((x) => {
                    return x.match()
                })
        }
    }


};