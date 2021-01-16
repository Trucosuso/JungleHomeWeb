var modal;
function main(){
    modal = $("#myModal");

    $("#login-button").on("click",function(){
        $(modal).css("display","block");
        
    })

    $("#cerrar").on("click", function(){
        $(modal).css("display","none");
    })

    $(window).on("click",function(event){
        console.log(event.target)
        if(event.target == modal[0])
            $(modal).css("display","none");
    })
}

window.addEventListener("load",main);