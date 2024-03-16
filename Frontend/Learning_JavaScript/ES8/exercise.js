// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

// answer:
const urlForUsers = 'https://jsonplaceholder.typicode.com/users/'

async function fetchUsers(url){
  const responseUsers = await fetch(url)
  const data = await responseUsers.json()
  console.log(data)
}

fetchUsers(urlForUsers)

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const getData2 = async function () {
  const [responseUsers,responsePosts,responseAlbums] = await Promise.all(urls.map((url) => fetch(url)));
  const users = await responseUsers.json();
  const posts = await responsePosts.json();
  const albums = await responseAlbums.json();

  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

getData2()

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData3 = async function () {
  try{
    const [responseUsers,responsePosts,responseAlbums] = await Promise.all(urls2.map((url) => fetch(url)));
    const users = await responseUsers.json();
    const posts = await responsePosts.json();
    const albums = await responseAlbums.json();

    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err){
    console.log("error", err)
  }
};

getData3()