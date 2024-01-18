//ASYNC AWAIT
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolvido');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('chamando');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();