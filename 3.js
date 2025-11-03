/* 
The code works but is not secured - the client code can delete array element from outside
Fix this issue 
*/

function getUsers() {
  const users = ["Bill"]; 

  return {
    addUser: function(name) {
      users.push(name);
     
    },
    getUsers: function() {
      // return a frozen COPY 
      return Object.freeze([...users]);
    }
  };
}

const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");
console.log(u.getUsers()); // [ 'Bill', 'Jim', 'Paul' ]

// Trying to delete element from outside (will NOT affect internal array)
u.getUsers().pop();
console.log(u.getUsers()); // still [ 'Bill', 'Jim', 'Paul' ]
