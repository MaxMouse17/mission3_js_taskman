"use strict";
function triangle(){
let hasher = "";
	for (let i=1; i<=7; i++ ) {
       if (i>1) 
        hasher+="\n";
        
        for(let j=1; j<=i; j++){
		hasher+="#";
		
		                      }
		                      }
    return hasher;
                  }

     console.log( triangle() );




function triangle2(){
let hasher = "#";
let h="#";
    for (let i=1; i<7; i++ ) {
        h=h+"#";
         hasher=hasher+"\n"+h; 
               
           }                   
    return hasher;
                    }

     console.log( triangle2() );



     function triangle3()  {
        let hasher="#######";
        let hasher1="#";
        do {            
           // alert( hasher1  );
            console.log(hasher1);
            hasher1+="#";}
        while(hasher1.length<=hasher.length)                     
       }

triangle3();



   function triangle4()  {
     let hasher="#";
     do{
        console.log(hasher);
        hasher+="#";
       }
     while(hasher.length<=7)
                         }
triangle4();





     function FB(){
        let a;
        let b="";
         for (let i=1; i<=100; i++){
         	if ( (i%5==0)&&(i%3==0) )
                a="FizzBuzz";

                 else if ((i%5==0)&&(i%3!=0))            
                  a="Buzz";
                  
                    else if (i%3==0)                           
             	     a="Fizz"; 

                        else 
                        a=i;

             b=b+a+"  ";
                                   }
                    return b;}

    console.log( FB() ) ;   



function Chess1(){
let chess ="";  
for(let i=1; i<=8; i++){  
      
    for(let j=1; j<=8; j++)  {
      if ((i+j)%2==0){  
       chess+="#" ;} 
           else chess+=" ";  
                        
                            }  
     chess+="\n";                              
          
   }
   return chess;
}
console.log( Chess1() );



function Chess2(){
let chess ="";
for(let i=1; i<=8; i++){
    for(let j=1; j<=8; j++){
      chess+= ((i+j)%2==0) ? "#" : " " ;
                           }
      chess+="\n";
                       }
return chess;
                 }
console.log( Chess2() );




let min=(val1, val2)=> val1 < val2 ? val1 : val2;
//alert ( min(-100000, 500)  );
//alert ( min(0.7, 0.25)  );
console.log( min(-100000, 500)  );
console.log( min(0.7, 0.25) );                        



function isEven(n) {
  if (n == 0)
    return true;
  if (n == 1)
    return false;
   if (n>=2) 
     return isEven(n - 2);
   if (n < 0){
     n=-n;
    return isEven(n);
              }
                    }

console.log( isEven(50) );
console.log( isEven(75) );
console.log( isEven(-1) ); 



function countBs(string){
let cnt=0;
  for (let i=0; i<string.length; i++){
     if ( string.charAt(i)=="B" ) {
        cnt++;                    }
                                     }
return cnt;
                        }

console.log( countBs("Mr Bean from Britain") );
console.log( countBs("message") );

function countChar(string, symb){
let cnt=0;
  for (let i=0; i<string.length; i++){
     if ( string.charAt(i)==symb ) {
        cnt++;                    }
                                     }
return cnt;
                        }

console.log( countChar("Dasha", "a") );
console.log( countChar("Ikea", "w") );




function range(first, fin, step) {
 let arr = [];
 if (step==undefined) step=1;
 if( (step>0)&&(first<fin)&&((fin-first)>=step) )
      for(let i=first ; i<=fin; i+=step) {
        arr.push(i);                     }
    
    else if ((step<0)&&(first>fin)&&( (first-fin)>= (-fin) )) 
        for ( let i=first; i>=fin; i+=step )   
        arr.push(i);
        
         else  {
         console.log("Неверно введены параметры.Проверьте, соответствует ли заданный шаг диапазону");
         return;}

    return arr;
                               }


function sum (arr){
let amount=0;
  for (let i = 0;  i <arr.length; i++) {
      amount+=arr[i];
                                    }
return amount;
}

console.log( range(1, 10) );
console.log( range(1, 10, 2) );
console.log( range(5, 2, -1) );
console.log( "*************");
console.log( range(5, 2, 1));
console.log( range(5, 2, 14));
console.log( range(2, 5, -1) );
console.log( range(1, 10, 17) );
console.log( range(1, 10, -17) );

console.log( sum(  range(1, 10) ) );





        while(1==1) {
let  N =prompt("Введите номер задачи от 1 до 7. Для выхода нажмите 0");
switch(N) {

    case  "1":
         while(true) {
   let v=prompt("Введите номер от 1 до 4 (функция написана 4-мя способами). Для выхода введите любую другую цифру");
    if (v=="1")   console.log(triangle());
        else if (v=="2")  console.log(triangle2());
            else if (v=="3")  triangle3();
                else if (v=="4")  triangle4();
                   else break; }
            break;                                 
                        
      case "2":
              console.log(FB());
    case "3":
      console.log(Chess1());//первый  способ
      console.log(Chess2());
     break;

    case "4":   console.log("min(-100000, 500):  ", min(-100000, 500));
                 
    break;
    case "5":       console.log(isEven(50));
                    console.log(isEven(75));
                    console.log(isEven(-1));
    break;
    case "6": console.log( countBs("Mr Bean from Britain") );
              console.log( countBs("message") ); 
              console.log( countChar("Dasha", "a") );
              console.log( countChar("Ikea", "w") ); 
              break;
    case "7": console.log( range(1, 10) );
              console.log( range(1, 10, 2) );
              console.log( range(5, 2, -1) );

              console.log( range(5, 2, 14));
              console.log( range(1, 10, -17) );

              console.log( sum(  range(1, 10) ) );
              break;
    case "0": break;


    Default:
           console.log("Введите номер задачи правильно! ");
            } 
 if (N==0) break;
}





