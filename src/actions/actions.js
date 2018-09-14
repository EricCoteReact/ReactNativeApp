
export function createUser(user) {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_STARTED" });

    var requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Cache-Control": "no-cache",
        "Access-Control-Origin": "*"
      },
      body: (JSON.stringify(user)),
      mode: "cors"
    };


    var myRequest = new Request('https://reqres.in/api/users');
    
    var response = await fetch(myRequest, requestInit);
    var addedUser = await response.json();
    dispatch({ type: "USER_ADDED", user: {first_name: addedUser.name, last_name: addedUser.job} });
  }
}



export function getUsers() {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_STARTED" });
    var response = await fetch("https://reqres.in/api/users");
    var userlist = await response.json();
    dispatch({ type: "USERS_LISTED", users: userlist.data });
  };
}


