let n=1;
for(i=0;i<100;i++){

    if(n%3==0){
        console.log("Fizz");
    }
    if(n%5==0){
        console.log("Buzz");
    }
    if(n%5!=0 && n%3!=0){
        console.log(n);
    }
    n= n + 1;
}