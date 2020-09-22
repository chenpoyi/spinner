const spinner2 = function () {
  let delay = 100;
  array = ['|','/','-','\\','|'];  
  for(let element of array){
    setTimeout(() => {
      process.stdout.write(`\r${element}  `);
    }, delay);
    delay += 200;
  }
}



spinner2();