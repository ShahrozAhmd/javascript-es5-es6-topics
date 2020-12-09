function makeRequest(locaiton) {
  return new Promise((res, rej) => {
    console.log("Making Request to...");
    if (locaiton === "Google") {
      res("Google say Hello");
    } else {
      rej("Sorry! Only make request to google");
    }
  })
};


function processRequest(info) {
  return new Promise((res, rej) => {
    console.log("Processing Request..");
    res(`Extra Informaion ${info}`);
  });
}

makeRequest("Google").then( response => {
  console.log(response);
  return processRequest(response).then(processResponse => {
    console.log(processResponse);
  });
}).catch((err) => {
    console.log(err);
});

async function doWork() {
  try {
    let func1 = await makeRequest('Google');
    let func2 = await processRequest(func1);
    console.log(func2);
  } catch (err) {
    console.log(err);

  }
}
doWork();