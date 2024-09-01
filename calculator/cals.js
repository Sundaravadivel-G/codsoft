var display='';
var num1='';
var num2='';
var flag=0;
var arith=0;
var n1,n2;
var answer=0;
function inputs(values)
{

    
    if(flag==0)
    {
        num1+=values;
        if(num1.length>8)
            return 0;
        display=num1;
        n1=Number(num1);
        answer=n1;
        document.getElementById('old').innerHTML=display;
    }
    else{
        num2+=values;
        if(num2.length>8)
            return 0;
        display+=values;
        document.getElementById('old').innerHTML=display;
        n2=Number(num2);
       
        switch(arith)
        {
            case 1:
                answer=answer/n2;
                break;
            case 2:
                answer=answer*n2;
                break;
            case 3:
                answer=answer+n2;
                break;
            case 4:
                answer=answer-n2;
                break;
        }
        document.getElementById('num1').innerHTML=answer;
    }
}


function arithmatic(operator)
{
   
    if(display.charAt(display.length - 2) == '/' ||display.charAt(display.length - 2) == '*' || display.charAt(display.length - 2) == '+' ||display.charAt(display.length - 2) == '-'  )
        return 0;
    flag=1;
    num2=0;
    switch(operator)
    {
        case 1:
            display=display + ' ' + '/' + ' ';
            arith=1;
           
            break;
        case 2:
            display+= ' ' + '*' + ' ';
            arith=2;
            break;
        case 3:
            display+= ' ' + '+' + ' ';
            arith=3;
            break;
        case 4:
            display+=' ' + '-' + ' ';
            arith=4;
    }
    document.getElementById('old').innerHTML=display;
}

function cleardata()
{
    document.getElementById('num1').innerHTML='';
    document.getElementById('old').innerHTML='';
    display='';
    num1='';
    num2='';
    flag=0;
    arith=0;
    answer=0;
}