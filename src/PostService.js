let $ = require ("jquery");

class PostService {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=";
    }

    getPosts(id) {
        let posts = $.get(this.url + id);
        return posts;
    }
}

module.exports = new PostService();