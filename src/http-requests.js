const http = {
  get: () => {
    console.log("Get Request called")
    window.alert("Doing a get request");
    return 200;
  },

  post: () => {
    console.log("Post Request called")
    window.alert("Doing a post request");
    return 200;
  }
}

export default http;
