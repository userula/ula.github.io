
function takevalue()
{
    let var2=document.getElementById('Password');
    let var3=document.getElementById('btnPassword');
    if(var2.type == 'password')
    {
        var2.type = 'text';
        var3.innerHTML='Unshow';
    }
    else{
        var2.type = 'password';
        var3.innerHTML='Show';

    } 
    
  
}



function changetheme(theme)
{
    if(theme == "darktheme")
    {
        document.querySelector(".gridform").style.background = "silver";
        document.querySelector("legend").className = "text-primary";
        document.querySelector("#submit1").className = "bg-primary font-weight-bold";

       
                          
    }
    else if(theme == "lighttheme")
    {
        document.querySelector(".gridform").style.background = "white";
        document.querySelector("legend").className = "text-success";
        document.querySelector("#submit1").className = "bg-success font-weight-bold";

    }
}


function chooseITgroup(degree)
{
    let s=document.getElementById('degree');



    if(degree == "bsdegree")
    {
        document.querySelector("#ITgroup1").style.display='block';
        document.querySelector("#ITgroup").style.display='block';
        document.querySelector("#other").style.display='none';


    }
    else if(degree == "degree")
    {
        document.querySelector("#ITgroup1").style.display='none'; 
        document.querySelector("#ITgroup").style.display='none';
        document.querySelector("#other").style.display='none';


    }

    else if(degree == "otherdegree")
    {
        document.querySelector("#ITgroup1").style.display='none'; 
        document.querySelector("#ITgroup").style.display='none';
        document.querySelector("#other").style.display='block';


    }
    

    
}









function checkfirstsymbol(letters)
{
    let numbers=[1,2,3,4,5,6,7,8,9,0];

    for(let l=0;l<numbers.length;l++)
    {
        if (letters[0]==numbers[l])
        {
            return false;
        }
        else{
            return true;
        }

    }
}

function send()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    let rfname = document.getElementById('repeatfname').value;

    
    if (fname.length<1){
        alert("Please fill First Name");
        return false;
    }
    else if(checkfirstsymbol(fname)==false)
    {
        alert("You cannot use symbols!");
        return false;
    }

    else if (fname.length>32){

        alert('No more than 32 letters');
        return false;
    }

    else{
        if (fname!=rfname)
        {
            
            repeatfname.style.backgroundColor='yellow';
            
            return false;
            
        }
        else{   
            repeatfname.style.backgroundColor='white';

        
                if (lname.length<1){
                    

                    alert("Please fill Last Name");
                    return false;
                }

                else if (lname.length>32){
                    alert('No more than 32 letters in Last Name');
                    return false;
                }

                else{
                    if (email.length<1){
                        alert("Please fill Email");
                        return false;
                    }
                    else if (email.length>32){
                        alert('No more than 32 letters');
                        return false;
                    }
                    else{
                        return true;
                    }
                }
                
        }
       
    }

    
}





let days   = document.getElementById("day");
let months = document.getElementById("month");
let years  = document.getElementById("year");

const monthnames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

const monthIds = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]




window.onload = function()
{
  for(let i=0; i<31; i++)
  {
    days.options[i] = new Option(i+1);
  }
  for(let i=0; i<monthnames.length; i++)
  {
    months.options[i] = new Option(monthnames[i]);
  }
  for(let i=1980; i<2005; i++)
  {
    years.options[i-1980] = new Option(i);
  }
  
  
}


