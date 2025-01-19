window.onload = function(){
    var banner_arr = document.getElementsByClassName("banner_block");
    var right_btn = document.getElementById("right");
    var left_btn = document.getElementById("left");
    var org_circle = document.getElementsByClassName("org_circle");

    var ban_index=0


    for (let i = 0; i < org_circle.length; i++) {
        org_circle[i].addEventListener('click', function() {
            showbanner(i);
            ban_index = i;
        });
    }

    function showbanner(index){
        for(var i=0; i<banner_arr.length; i++){
            
            if(i === index){
                banner_arr[i].style.display = "flex";
                org_circle[i].style.color = "#F15704";
            }
            else{
                banner_arr[i].style.display = "none";
                org_circle[i].style.color = "#F9B28C";
            }
        }
    }

    showbanner(ban_index);

    left_btn.onclick = function(){
        if(ban_index - 1 < 0){
            ban_index = banner_arr.length - 1;
        }
        else{
            ban_index--;
        }
        showbanner(ban_index);
    }

    right_btn.onclick = function(){
        if(ban_index + 1 >= banner_arr.length){
            ban_index = 0;
        }
        else{
            ban_index++;
        }
        showbanner(ban_index);
    }


}