const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise Failed to resolve");
    }
  }, 3000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function handlePromise() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
