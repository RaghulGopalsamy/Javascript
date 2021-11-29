function sub(){
    var text = document.getElementById("name").value;
    var regx=/[a-z A-Z]/;

    if(regx.test(text)|| text..trim()==""){
        
        document.getElementById("req").style.visibility="visible"
        document.getElementById("lbtext").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("req").style.visibility="hidden"
        document.getElementById("lbtext").style.visibility="hidden"
    }
    var  text1 = document.getElementById("father").value;
    var regx=/[a-z A-z]/;
    if(regx.test(text1)||text1.trim()==""){
        document.getElementById("lbtext1").style.visibility="visible";
        return false;

    }

    else{
        document.getElementById("lbtext1").style.visibility="hidden"
    }
    var email = document.getElementById("e_mail").value;
    var regx=/^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,6})(.[a-z]{2,8})?$/;
    if(regx.test(email)||email.trim()==""){
        document.getElementById("lbtext2").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("lbtext2").style.visibility="hidden";
    }
    var dob = document.getElementById("dob").value;
    var regx = /[0-9]{2} [0-9]{2} [0-9]{4}/;
    if(regx.test(dob)||dob.trim==""){
        document.getElementById("dob1").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("dob1").style.visibility="hidden";
    }
    var mob_num = document.getElementById("mobileNumber").value;
    var regx = /[6-9] [0-9] {9}/;
    if(regx.test(mob_num)||mob_num.trim==""){
        document.style.border
        document.getElementById("mob_num").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("mob_num").style.visibility="hidden";
    }
    var currentAddress = document.getElementById("curr_address").value;
    var regx = /[a-z] [A-z] [0-9]/;
    if(regx.test(currentAddress)||currentAddress.trim==""){
        document.getElementById("")
    }
    
    
}