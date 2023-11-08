let String="";
function factorials(){
    let input1 = document.getElementById('fact').value;
    let s=1,i;
    for(i=1;i<=input1;i++)
    {
        s=s*i;
    }
    String = s;
    let output1 = document.getElementById('fact2');
    output1.innerHTML ="FACTORIAL OF "+input1+"is "+s;
}
function fibo(){
    let ip =document.getElementById("fibo").value;
    let op=document.getElementById("fibo2");
    let a=0,b=1,c=0,str="",i;
    
    for(i=0;i<ip;i++)
    {
        str = str+","+c;
        a=b;
        b=c;
        c=a+b;

    }
    op.innerHTML="fibonacci series is -: "+str;
}






























// buttons = document.querySelectorAll('button');
//  for(item of buttons)
//  {
//     item.addEventListener('click',(e) =>{
//         buttonText=e.target.innerText;
//         if(buttonValue == 'fibo'){

//         }
//         else if(buttonText == 'fact'){
//             let input1 =document.getElementById('fact');
//             console.log(input1);
//             let s=1,i=1;
//             for(i=1;i<=input1;i++){
//                 s = s*i;
//             let input2 = document.getElementById('fact2');
//             input2.value = s;
//             console.log(s);
//             }

//         }
//         else if(buttonValue == 'strong'){

//         }
//         else if(buttonValue == 'perfect'){

//         }
//     })
//  }