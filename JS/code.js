var cards =[
    {
        id:1,
        img:"03 Blemishes.jpg",
        name:"Ahmed"
    },
    {
        id:2,
        img:"man5.jpg",
        name:"Mohammed"
    },
    {
        id:3,
        img:"man4.jpg",
        name:"Gamal"
    },
    {
        id:4,
        img:"03 Blemishes.jpg",
        name:"Moaz"
    },
    {
        id:5,
        img:"man5.jpg",
        name:"Ahmed"
    },
    {
        id:6,
        img:"man4.jpg",
        name:"Hamdy"
    },
    {
        id:7,
        img:"girl4 (2).jpg",
        name:"Aya"
    },
    {
        id:8,
        img:"girl5 (2).jpg",
        name:"Samar"
    },
    {
        id:9,
        img:"kids.jpg",
        name:"Romisaa"
    },
    {
        id:10,
        img:"girl4 (2).jpg",
        name:"Maiada"
    },
]


// function add(_id,_name,_img) {
//     var inp=prompt("Enter id & name & img separated by , ");
//     var arr=inp.split(",");
//     _id=Number(arr[0]);
//     _name=arr[1];
//     _img=arr[2];
//     this.id=_id;
//     this.name=_name;
//     this.img=_img;
// }




  


localStorage.setItem("Data",JSON.stringify(cards));

let content = '';
for(let item of cards){
    content +=`
        <div class="card1" id="std${item.id}">
            <div class="img-holder">
                <img src="IMG/${item.img}" alt="not found" height="220vh">
                <span>${item.id}</span>
            </div>
            <h4>${item.name}</h4>
            <a href="details.html?id=${item.id}">Details</a>
        </div>
        `
}
document.getElementById("card").innerHTML=content;




function randomChild(cards){
    let child = cards[Math.floor(Math.random()*cards.length)];
    let content1 = `
    <div class="card1" id="std${child.id}">
        <div class="img-holder">
            <img src="IMG/${child.img}" alt="not found" height="220vh">
            <span>${child.id}</span>
        </div>
        <h4>${child.name}</h4>
        <a href="details.html?id=${child.id}">Details</a>
    </div>
    `
    document.getElementById("result").innerHTML=content1;

}



function add() {
    var inp=prompt("Enter id & name & img separated by , ");
    var arr=inp.split(",");
    document.getElementById("card").innerHTML +=`
        <div class="card1" id="std${Number(arr[0])}">
            <div class="img-holder">
                <img src="IMG/${arr[2]}" alt="not found" height="220vh">
                <span>${Number(arr[0])}</span>
            </div>
            <h4>${arr[1]}</h4>
            <a href="details.html?id=${Number(arr[0])}">Details</a>
        </div>
        `;    
}