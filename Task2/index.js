async function allDataAndDelete(){
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      console.log(data[0].body);

    //   let container = document.getElementById('card1');

    //   for (let i = 0; i < data.length; i++) {;
    //     let elementname = "newElement" + i
    //     elementname = document.createElement('h1');
    //     elementname.textContent = data[i].title;
    //     container.appendChild(elementname);
    //     element.style.cssText = 'border: 2px solid red; padding: 10px; background-color: lightblue;';

        //
    //     data.map((val,Index) =>{
    //         arrayData += `<div class= "card">
    //         <h1> ${val.id}</h1>
    //         <h1> ${val.title}</h1>
    //         <h1> ${val.body}</h1>
    //         <h1> ${val.userId}</h1>
    //         </div>`
    //     })
    //   }

        // document.getElementById('title').innerText = data[i].title;
        // document.getElementById('body').innerText = data[i].body;


      const data2 = await res2.json();
      console.log(data2 ); 
    } catch (error) {
      console.log(error);
    }
  }

  allDataAndDelete();


//   function changeText(){
//     const text = document.getElementById('validation').value;
//     const reg = /^(0|[1-9]\d*)$/;
    
//     if(reg.test(text)){
//       console.log("Success.....")
//       document.getElementById('error').innerText = "Valid Number"
//       document.getElementById('error').style.color = 'Green'
//     }
//     else{
//       console.log("filed.....")
//       document.getElementById('error').innerText = "Error"
//       document.getElementById('error').style.color = 'Red'
//     }
//   }
  

const submitForm = () =>{
    const data = document.getElementById('inputField').value;
    console.log(data);

    switch (data) {
        case 'intern':
          document.getElementById('result').textContent = 'Internal Software Engineer';
          break;
          case 'ase':
            document.getElementById('result').textContent = 'Associate Software Engineer';
            break;
        default:
            document.getElementById('result').textContent = 'Incorrect Value';
          break;
      }
}