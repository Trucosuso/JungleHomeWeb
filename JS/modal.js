var modal;
$(function (){
    modal = $("#myModal");

    $("#join-us-button").on("click",register);

    $("#login-button").on("click",login);
    

    $(window).on("click",function(event){
        if(event.target == modal[0])
            $(modal).css("display","none");
    })
});

function register(){
    $(modal).empty();

    let modalConent = $("<div>").attr("class","modal-content");
    let iconClose = $("<img src='images/close.svg' alt='close' id='cerrar' class='icon close icon-big'>")

    /* div login-register */
    let loginRegister = $("<div id='login-register'></div>")
        .append($("<a id='login-modal' class='text-decoration text-black' href='#'>Login</a>"))
        .append($("<a id='register-modal' class='text-decoration text-black' href='#'>New Customer</a>"));

    let fieldset = $("<fieldset>")
        .append($("<input id='accept' class='checkbox' type='checkbox' value='accept'>"))
        .append($("<label for='accept'>I have read and accept the privacy policy.</label>"));

    let form = $("<form action=''</form>")
        .append($("<input class='input border-black' type='email' placeholder='Email' pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'>"))
        .append($("<input class='input border-black' type='password' placeholder='Password'>"))
        .append($("<input class='input border-black' type='password' placeholder='Confirm Password'>"))
        .append($(fieldset))
        .append($("<a href='#' class='button text-black bg-green button-wide'>Sing Up</a>"));

    /* Añadir elementos a myModal */   
    $(modal).append($(modalConent).append($(iconClose)).append($(loginRegister)).append($(form)));  
    $(modal).css("display","block");

    $("#login-modal").on("click",login);

    $("#register-modal").on("click",register);

    $("#cerrar").on("click", function(){
        $(modal).css("display","none");
    })
};

function login(){
    $(modal).empty();

    let modalConent = $("<div>").attr("class","modal-content");
    let iconClose = $("<img src='images/close.svg' alt='close' id='cerrar' class='icon close icon-big'>")

    /* div login-register */
    let loginRegister = $("<div id='login-register'></div>")
        .append($("<a id='login-modal' class='text-decoration text-black' href='#'>Login</a>"))
        .append($("<a id='register-modal' class='text-decoration text-black' href='#'>New Customer</a>"));

    let fieldset = $("<fieldset>")
        .append($("<input id='accept' class='checkbox' type='checkbox' value='accept'>"))
        .append($("<label for='accept'>I have read and accept the privacy policy.</label>"));

    let form = $("<form action=''></form>")
        .append($("<input class='input border-black' type='email' placeholder='Email' pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'>"))
        .append($("<input class='input border-black' type='password' placeholder='Password'>"))
        .append($("<a id='forgotPassword? class='text-black' href='#'>Forgot your password?</a>"))
        .append($("<a href='#' class='button text-black bg-green button-wide'>Sing Up</a>"));

    /* Añadir elementos a myModal */   
    $(modal).append($(modalConent).append($(iconClose)).append($(loginRegister)).append($(form)));  
    $(modal).css("display","block");

    $("#login-modal").on("click",login);

    $("#register-modal").on("click",register);

    $("#cerrar").on("click", function(){
        $(modal).css("display","none");
    })
};