/* eslint-disable no-unused-vars */
import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
    searchTitle() {
        this.findByTitle(this.title)
            .then(response => {
                this.tutorials = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    getProducts() {
        http.get('http://localhost:8080/products')
            .then(res => {
                this.products = res.data;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
    }
    deleteProduct(productIdDelete) {
        http.delete(`http://localhost:8080/products/${productIdDelete}`)
            .then(response => {
                // handle success
                this.getProducts();
                this.dialogDelete = false;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
    }
    updateProduct(productIdEdit) {
        http.put(`http://localhost:8080/products/${productIdEdit}`, {
                product_name: this.productNameEdit,
                product_price: this.productPriceEdit
            })
            // eslint-disable-next-line no-unused-vars
            .then(response => {
                // handle success
                this.getProducts();
                this.dialogEdit = false;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
    }
    addPost() {
        let uri = 'http://localhost:4000/posts/add';
        this.axios.post(uri, this.post).then(() => {
            this.$router.push({
                name: 'posts'
            });
        });
    }
}

export default new TutorialDataService();