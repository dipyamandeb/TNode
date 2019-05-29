/*
  Non blocking code - synchronous code with callbacks
*/ 

/*console.log('Before');
setTimeout(() =>{
  console.log("Reading user from a database");
}, 2000);
console.log('After');
*/

// pattern for dealing with asynchronous code
console.log('BEfore');
//const user = getUser(1, function(user){
getUser(1, function(user){
   //console.log('user', user);
    getRepository(user.name, (repos)=>{
        console.log('Repos', repos);
    });

});
//console.log(user);
console.log('After');


function getUser(id, mycallback)
{
    /*setTimeout(() =>{
        console.log("Reading user from a database");
        mycallback({id: 1, name: 'Priyanka Gawada'});
        //return {id: 1, name: 'Priyanka Gawada'};

             }, 2000);
      */
     setTimeout(mycallback, 2000);       
}
function mycallback()
{
  return {id: 1, name: 'Priyanka Gawada'};
}
function getRepository(username, callback)
{
    setTimeout(() =>{
        console.log('calling github..');
        callback(["repo1", "repo2", "repo3"]);
    }, 2000);
    
}