function submitData(name, email){
    const formData = {
    name: `${name}`,
    email: `${email}`,
  };
  
    const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
 fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        return object;
    })
    .catch (function (error) {
        alert("Unauthorized Access");
        console.log(error.message);
      });
}
