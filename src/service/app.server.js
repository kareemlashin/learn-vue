import axios from "axios";
export const apiUrl = ``;
axios.defaults.baseURL = apiUrl;

export const appService = {
    get() {
        return new Promise((resolve, reject) => {
            axios.get("path").then(res => resolve(res.data)).catch(res => reject(res.any))
        })
    },
    put(data, id) {
        return new Promise((resolve, reject) => {
            axios.put("path/" + id, data).then(res => resolve(res.data)).catch(res => reject(res.any))
        })
    },
    post(data) {
        return new Promise((resolve, reject) => {
            axios.post("path", data).then(res => resolve(res.data)).catch(res => reject(res.any))
        })
    },
    delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete("path/" + id).then(res => resolve(res.data)).catch(res => reject(res.any))
        })
    },
    login(data) {
        return new Promise((resolve, reject) => {
            axios.post("path", data).then(res => resolve(res.data)).catch(res => reject(res.any))
        })
    },
    register(data) {
        return new Promise((resolve, reject) => {
            axios.post("path", data).then(res => resolve(res.data)).catch(res => reject(res.any))
        })

    }
}