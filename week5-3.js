function getUsers() {
  const users = ["Bill"];

  return {
    addUser: function(name) {
      users.push(name);
      return Object.freeze([...users]);
    },
    getUsers: function() {
      return Object.freeze([...users]);
    }
  };
}

const u = getUsers();

console.log(u.getUsers().pop());
console.log(u.getUsers().push("Test"));
console.log(u.getUsers());
