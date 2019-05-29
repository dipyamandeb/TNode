/*
    Non- blocking code
    getUser
    getRepository

    getUsers -->pass username -->getRepository

*/



console.log('Before');

//Original version
// const p = getUser(1);
// const r = p.then(user => getRepository(user.username));
// r.then(repos => console.log(repos));

//Siplified version 
// getUser(1)
//     .then(user => getRepository(user.name))
//     .then(repos => getCommit(repos[0]))
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));


CallAll();
async function CallAll(){
try {
    let user = await getUser(1);
    let repo = await getRepository(user.name);
    let result = await getCommit(repo[0]);
    console.log(result);
} catch (error) {
    console.log(error);
}


}




//Design a asynchronous code - user id and get an object

async function getUser(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Performing db activity")
            resolve({ id: id, gitHubUser: 'priyanka' });
            reject("Error- user");
        }, 2000);
    });
}


async function getRepository(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Connect to Github Repository and get repository name")
            resolve(['repo1', 'repo2', 'repo3']);
            reject("Error- repository");
        }, 5000);

    });

}

async function getCommit(reponame) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Commiting the repo")
            resolve("Data to be commited for repo =>" + reponame);

            reject(new Error("Error- repository"));
        }, 6000);

    });

}



console.log('After')