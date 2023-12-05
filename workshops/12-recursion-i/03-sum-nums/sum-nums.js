const sumNums = (num) => {
    if(num <= 1) 
    {
       console.log(num);
    } 
    else 
    {
       num = num + sumNums(num - 1);
       console.log(num);
    }
};

sumNums(3);