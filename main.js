var images=[
    "grandpa.jpeg",
    "grandma.jpg",
    "dad.jpeg",
    "mom.jpeg",
    "sister.jpg",
    "me.jpeg"
  ];


  var i = 0;
function update(){
  var number_of_family_member_array = 6;
   if(i > number_of_family_member_array)
     {
       i=0;
     }

     var updated_image = images[i];
      
   
    document.getElementById("album").src = updated_image;
  i++;
}