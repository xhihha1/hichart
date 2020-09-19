//除法
hichart.prototype.accDiv = function (arg1,arg2) {
    var t1=0,t2=0,r1,r2; 
    try {
        t1=arg1.toString().split(".")[1].length;
    } catch(e){} 
    try {
        t2=arg2.toString().split(".")[1].length;
    } catch(e){} 
    with(Math){ 
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1); 
    } 
}

//乘法
hichart.prototype.accMul = function (arg1,arg2) {
    var m=0,s1=arg1.toString(),s2=arg2.toString(); 
    try {
        m+=s1.split(".")[1].length;
    } catch(e){} 
    try {
        m+=s2.split(".")[1].length;
    } catch(e){} 
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

//加法
hichart.prototype.accAdd = function (arg1,arg2) {
    var r1,r2,m; 
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
} 

//減法
hichart.prototype.accSubtr = function (arg1,arg2) {
    var r1,r2,m,n;
    try {
        r1=arg1.toString().split(".")[1].length;
    } catch(e){r1=0}
    try {
        r2=arg2.toString().split(".")[1].length;
    } catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

function transformInt(num1, num2, padZeno, compute) {  
    num1 = '' + num1;  
    num2 = '' + num2;  
   
    var p1 = 0, p2 = 0;  
    try { p1 = num1.split(".")[1].length } catch (e) { }  
    try { p2 = num2.split(".")[1].length } catch (e) { }  
   
    if(padZeno){  
        while (p1 < p2) { p1++; num1 += '0'; }  
        while (p2 < p1) { p2++; num2 += '0'; }  
    }  
   
    var int1 = parseInt(num1.replace(".", ""), 10);  
    var int2 = parseInt(num2.replace(".", ""), 10);  
    return compute(int1, int2, p1, p2);  
 }  
   
   
 /*浮點數相加*/  
 function floatAdd(num1, num2) {  
    return transformInt(num1, num2, true, function(int1, int2, p1, p2){  
        return (int1 + int2) / Math.pow(10, p1);  
    });  
 }  
   
 /*浮點數相減*/  
 function floatSub(num1, num2) {  
    return transformInt(num1, num2, true, function(int1, int2, p1, p2){  
        return (int1 - int2) / Math.pow(10, p1);  
    });  
 }  
   
 /*浮點數相乘*/  
 function floatMul(num1, num2) {  
    return transformInt(num1, num2, false, function(int1, int2, p1, p2){  
        return (int1 * int2) / Math.pow(10, p1 + p2);  
    });  
 }  
   
 /*浮點數相除*/  
 function floatDiv(num1, num2) {  
    return transformInt(num1, num2, false, function(int1, int2, p1, p2){  
        return (int1 / int2) / Math.pow(10, p1 - p2);  
    });  
 }  