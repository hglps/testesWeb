function isPasswordCorrect(index, password){
    if(password === userList[index].getPassword){
        return 1;
    }
    else return 0;
}

function isThereUser(username, password){
    console.log("bbbbbbbbbb");
    for(let i=0; i< userList.length; i++){
        console.log(userList[i].userName + "   " + username);
        if(username === userList[i].userName){
            return isPasswordCorrect(i, password);
        }
    }
    return -1;

}




function checkLogin(username, password){
    console.log("aaaaaaaaaaaaaa");
    return isThereUser(username, password);
}