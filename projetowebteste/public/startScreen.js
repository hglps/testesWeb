$(function(){
    $("#btnToRegister").click(function(){
        $("#selectionStartLogin").css("display", "none");
        $("#selectionStartRegister").css("display", "block");
    });

    $("#btnToLogin").click(function(){
        $("#selectionStartLogin").css("display", "block");
        $("#selectionStartRegister").css("display", "none");
    });
    $("#btnLogin").click(function(){
        let validLogin = checkLogin( $("#loginStr").val(), $("#passwordLoginStr").val() );
        if(validLogin == 1){
            $("#abc").load("tt.html");
        }
        else if(validLogin == -1){
            $("#abc").each(function(){
                alert("User not found!");
            });
        }
        else if(validLogin == 0){
            $("#abc").each(function(){
                alert("Wrong password!");
            });
        }
    });



});