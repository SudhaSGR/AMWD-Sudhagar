// let  URL1 = "fetch('https://jsonplaceholder.typicode.com/posts')";
const getData = () =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finaly"));
}

const postData = () =>{
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finaly"));
}

const putData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo12",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finaly"));
}

const deleteData = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finaly"));
}


// async -- Run api's in step by step

async function allDataAndDelete(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data[0].id);
    //
    const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/"+data[0].id, {
      method: "DELETE",
    })
    const data2 = await res2.json();
    console.log(data2 ); 
  } catch (error) {
    console.log(error);
  }
}

allDataAndDelete();