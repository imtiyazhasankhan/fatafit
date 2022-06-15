var images = ['https://i.ibb.co/YQkhj79/bg1.jpg', 'https://i.ibb.co/dt020M6/bg2.jpg']
// document.getElementById('left_div').style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';

// var brand = ["فٹافٹ","फटाफिट",'ഫടാഫിറ്റ്']
// const text_ = brand[Math.floor(Math.random() * brand.length)];
// document.getElementById("brand_").innerText = text_

next = ()=>{
    var user_name = document.getElementById("name").value 
    document.getElementById("welcome").innerText = `Hey ${user_name}! Welcome to Fatafit `
    document.getElementById("next").style.display = "block"
}
close_ = ()=>{
    document.getElementById("next").style.display = "none"
}

// _____________________________for mobile navbar_______________________
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
