var users=[
    {
        "name" : "Jonny",
        "gender" : "male",
        "image" : "/images/image.png"
    },
    {
         "name" : "Jane",
        "gender" : "female",
        "image" : "/images/jane.png"
    }
]

var curId = 0;

function toggle(){

    console.log("control in js file")
    //toggle curId from 0 -> 1 & 1-> 0
    curId=(curId+1)%2;
    //toggle the rendered user details
    //image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;

    //to do : update for name and gender !

    //name
    document.getElementById("user-name").innerText=user.name;

    //gender
    document.getElementById("user-gender").innerText=user.gender;
}