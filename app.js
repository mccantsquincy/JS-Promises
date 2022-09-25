// PROMISES
// What is a Promise?
/**  Promises is something that gives you a value sometimes 
 * in the future. When you want complex things on a website 
 * such as; logging users in, registering users, processing 
 * payments, save things to the database. All these features
 * have one thing in common which is talking to a back end server
 * it communicating through a API. PROMISES allows you to talk
 * to backend. Basically the backend creates the promise and 
 * the frontend uses the promise.
 * */

//fetch("https://jsonplaceholder.typicode.com/users/1")  <-- used to fetch promise

const emailRef = document.querySelector(".email")

// to unclock the data that we just fetched above... there are 2 methods

// 1. Then 
//first we are grabbing the promise from the backend
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response => {
//     return response.json()
//     }).then(data => {
//         console.log(data)
//         emailRef.innerHTML = data.email
//     })



// 2. Async/Await (best case practice in most scenarios)
  async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data);
    emailRef.innerHTML = data.email

 }

  main()


// How to create a promise
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
       resolve("FREE")
    })
}

console.log(getSubscriptionStatus())

//how to unwrap promise

// 3. then
getSubscriptionStatus().then(response => console.log(response))

// 2. async/ await
// async function main() {
//     console.log(await getSubscriptionStatus())
// }

// main()

// CHALLENGE

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === 'VIP') {
        resolve("show video") 
    } else if (subscriptionStatus === "FREE") {
        resolve('show trailer')
    } else {
        reject("no video")
    }
  })
}

async function main() {
  const status = await getSubscriptionStatus();
  console.log(await getVideo(status))
}

main()