/*
  Non-blocking code - asynchronous code with promise object
*/ 

console.log('Before');
// Consuming promise
//const p = getUser(1);
//p.then(user => console.log(user));
getUser(1).then(user => getRepository(user.name))
           .then(repos => repos.forEach(element => {
                 console.log("Repository name - ", element);      
           })
         );
console.log('After');



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