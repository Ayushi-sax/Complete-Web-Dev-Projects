function fibo(count){
    if (count<0){
        console.log("Please enter a positive number."); // Handle invalid inputs
        return;
    }
    else{
    let newArr = [0,1];
    for (let i = 2; i < count; i++) {
      newArr.push(newArr[i - 1] + newArr[i - 2]); // Add the last two numbers
    }
    return console.log(newArr);
    }
}
fibo(6); 