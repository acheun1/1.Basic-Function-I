1.
function a(){
    return 35;
}
console.log(a())

Prediction: [35]
Output:35

2.
function a(){
    return 4;
}
console.log(a()+a());

Prediction: 8
Output:8

3.
function a(b){
    return b;
}
console.log(a(2)+a(4));

Prediction: 6
Output: 6


4.
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

b=3, 3 * 3=9
Prediction:3,9
Output:3,9


5.
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

NOTES:
b=10 * 4; 10

Prediction:40, 10
Output: 40


6.
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

NOTES:
b=15 is not < 10, return 4

Prediction: [4]
Output:[4]


7.
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

NOTES: 10,3 then b=10*c=3 = 30

Prediction:10,3,30
Output:10,3,30

8.
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

Notes: function a(b) never called, 3, 4

Prediction:3,4
Output:3,4


9.
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

NOTES: 
i=0; 0<10 then 0+2
i=2 + i=1; 2<10 then 3+2
i=5 + i=1; 6<10 then 6+2
i=8 + i=1; 9<10 then 9+2
i=11 + i=1; 11< 10 

Prediction: 2,5,8,11
Output:2,5,8,11


10.
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

NOTES: 
i=0; 0<10, b=0*c=10
i=1; 1<10, b=0*c=10
i=2; 2<10, b=0*c=10
i=3; 3<10, b=0*c=10
i=4; 4<10, b=0*c=10
i=5; 5<10, b=0*c=10
i=6; 6<10, b=0*c=10
i=7; 7<10, b=0*c=10
i=8; 8<10, b=0*c=10
i=9; 9<10, b=0*c=10
i=10; 10<10

console.log(a(0,10))
i=0; 0<10, b=0*c=10
i=1; 1<10, b=0*c=10
i=2; 2<10, b=0*c=10
i=3; 3<10, b=0*c=10
i=4; 4<10, b=0*c=10
i=5; 5<10, b=0*c=10
i=6; 6<10, b=0*c=10
i=7; 7<10, b=0*c=10
i=8; 8<10, b=0*c=10
i=9; 9<10, b=0*c=10
i=10; 10<10

Prediction:0,1,2,3,4,5,6,7,8,9 ,0,1,2,3,4,5,6,7,8,9
Output: 0,1,2,3,4,5,6,7,8,9 ,0,1,2,3,4,5,6,7,8,9



11.
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

NOTES: 
Prediction: none, function a() never called
Output: none, function a() never called


12.
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

Prediction:none, function a() never called
Output:none, function a() never called


13.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

NOTES: function a() never called so z=15 is not printed

Prediction: 10
Output: 10


14.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z); 

NOTES: 
a() = 15, console.log(z)=10

Prediction: 15, 10
Output:15,10




15.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

a()=15 then z = 15, console.log(z) =15 due to return z in function a

Prediction: 15, 15
Output: 15,15


