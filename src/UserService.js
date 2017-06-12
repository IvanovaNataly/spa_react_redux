let $ = require("jquery");

class UserService {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users/";
    }

    getUsers(){
        let users = $.get(this.url);
        return users;
    }

    getUser(id){
        let user = $.get(this.url + id);
        return user;
    }
}

module.exports = new UserService();