fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    console.log(completedata[0].name);
    document.getElementById('firsttwittername').innerHTML = completedata[0].name;
    document.getElementById('secondtwittername').innerHTML = completedata[0].name;
    document.getElementById('username').innerHTML = completedata[0].username;
});




fetch('https://jsonplaceholder.typicode.com/users/1/posts').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[0].userId);

    let data1 = "";

    completedata.map((values)=>{
        data1 += `
        <div id="tweet">
                
                    <h1 id="userId">${values.userId}</h1>
                    <p id="title">${values.title}</p>
                    <p id="body">${values.body}</p>
                </div>
        `
    });

    document.getElementById("tweets").innerHTML = data1;

});

