class User{
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
        this.favoritesList = [];
        this.rentList = [];
    }

    get getFavoritesList(){
        return this.favoritesList;
    }

    addToFavorites(favorite){
        this.favoritesList.push(favorite);
    }

    removeFromFavorites(index){
        this.favoritesList.splice(index, 1);
    }



    get getUser(){
        return this.user;
    }
    set setUser(user){
        this.user = user;
    }

    get getUserName(){
        return this.userName;
    }

    get getPassword(){
        return this.password;
    }
    set setPassword(password){
        this.password = password;
    }
}