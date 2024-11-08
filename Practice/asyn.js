
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    console.log("Helo")
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();
  

