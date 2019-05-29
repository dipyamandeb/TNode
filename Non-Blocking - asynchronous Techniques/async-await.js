/*
  Non-blocking code - asynchronous code with aync and await
*/ 

// Async and await

async function displayRepos() {
   const user  =  await getUser(1);
   const repos = await getRepository(user.username);
   console.log(repos);
}

displayRepos();


function getUser(id)
{
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            console.log("Reading user from a database");
            resolve({id: 1, name: 'Priyanka Gawada'});
        }, 2000);
    });
    
}

function getRepository(username)
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('calling github API..');
            resolve(["repo1", "repo2", "repo3"]);
        }, 2000);
    });
}