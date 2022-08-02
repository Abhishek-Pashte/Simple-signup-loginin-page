function choose_opt(opt){
    var x=document.getElementById("signupbox");
    var y=document.getElementById("loginbox");
    if(opt==1)
    {
        x.style.display="block";
        y.style.display="none";
        document.getElementById("s").style.backgroundColor="rgb(215, 140, 59)";
        document.getElementById("l").style.backgroundColor="burlywood";
    }
    else
    {
        x.style.display="none";
        y.style.display="block";
        document.getElementById("l").style.backgroundColor="rgb(215, 140, 59)";
        document.getElementById("s").style.backgroundColor="burlywood";
    }
}
function set_to_default(){
    document.getElementById("sign_pass").value="";
    document.getElementById("sign_repass").value="";
}

function checksignname()
{
    var sign_name_len=document.getElementById("sign_name").value.length;
    var login_name_len=document.getElementById("login_name").value.length
    if(sign_name_len==0)
    {
        alert("Enter Username");
    }
}
function checkloginname()
{
    var login_name_len=document.getElementById("login_name").value.length
    if(login_name_len==0)
    {
        alert("Enter Username");
    }
}
function check_sign_pass(){
    var sign_pass=document.getElementById("sign_pass").value;

    if(sign_pass.length==0)
    {
        alert("Enter password s");
        set_to_default();
        return false;
    }
    else if(sign_pass.length<6)
    {
        alert("Password lenght must be >6");
        set_to_default();
        return false;
    }
    return true;
}

function check_login_pass(){
    var login_pass=document.getElementById("login_pass").value;

    if(login_pass.length==0)
    {
        alert("Enter password l");
        set_to_default();
        return false;
    }
    else if(login_pass.length<6)
    {
        alert("Password lenght must be >6");
        set_to_default();
        return false;
    }
    return true;
}
function signup(){
    var name=document.getElementById("sign_name").value;
    var pass=document.getElementById("sign_pass").value;
    var repass=document.getElementById("sign_repass").value; 
    if(name.length==0)
    {
        alert("Enter Username");
    }
    if(pass==repass && check_sign_pass()==true && name.length>0)
    {
        alert("Successful Sign up");
    }
    else
    {
        alert("Re enter correct password");
    }
}

function login()
{
    var name=document.getElementById("login_name").value;
    var pass=document.getElementById("login_pass").value;
    if(name.length>0 && pass=="admin" && name=="admin")
    {
        location.href="in.html";
        alert("Successfully log in");
    }
    else
    {
        alert("Incorrect Credentials");
    }
}

