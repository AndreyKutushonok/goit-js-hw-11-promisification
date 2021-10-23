const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
  ];
  
const toggleUserState = (allUsers, userName) =>
    Promise.resolve(allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
    )
);

const loginUpdate = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(loginUpdate);
toggleUserState(users, "Lux").then(loginUpdate);