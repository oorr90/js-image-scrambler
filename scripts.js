window.onload = init;

var imageFolder = "images/tree/";
var fileList = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"];
checkMarkImg = "<img src=\"images/check_mark.png\">";

    

//CALL INIT WHEN WINDOW LOADS
function init() {
    
    
//ADD HIDE ORIGINAL BUTTON
    //create new button element
    var hideButton = document.createElement("input");
    hideButton.type = "button";
    hideButton.value = "Hide Original";
    //grab the orig_heading with ID
    var origHeading = document.getElementById("orig_heading");
    //append the new button to the orig_heading
    origHeading.appendChild(hideButton);
  
    
//CREATE DIVS AND IMG TAGS FOR GALLERY
    //grab the originals div by ID and store it in a variable
    var originals = document.getElementById("originals");
    
    //call addImgtoDiv function to create the original image with tiles
    addImgToDiv();
    
    function addImgToDiv() {
    //create a for loop that generates new divs with img tags inside
    //using 16 for the counter since the image has 16 squares
        for (var i = 0; i < fileList.length; i++) {
            //create a new div
            var newDiv = document.createElement("div");
            newDiv.className = "tile";

            //create a new img tag with the file from the array
            var newImg = document.createElement("img");
            newImg.src = imageFolder + fileList[i] + ".jpg";
            newImg.id = fileList[i];

            //append the image tag to the new div
            newDiv.appendChild(newImg);

            //append the new div with image to the originals div
            //originals.appendChild(newDiv);
                //call the clickSingleTile function when the onclick occurs
            originals.appendChild(newDiv).onclick = clickSingleTile;
            
        }
    }
    

    //create clickSingleTile function
    function clickSingleTile() {
        
        //prevent the user from adding tiles if the image source is already the checkmark
        if (this.innerHTML !== "<img src=\"images/check_mark.png\">") {
        
        //save THIS in a variable, which has the div with tile class and inner image tag
        var scrambleDiv = this;
        //clone THIS so it can be used twice in two scenarios
        var clone = scrambleDiv.cloneNode(true);
        
        /******** Had difficulties with this part: **********/
            
        //Store the image ID in a variable to use as the label in the scrambler
        var imgId = clone.getElementsByTagName("img")[0].id;
        //Could not figure out how to nicely insert the labels, but the squares print 4x4 when this part is commented out
        clone.innerHTML += "<div class=\"label\">" + imgId + "</div>";
        
        /****** end problem section ******/
            
        //append the clone of this to the scramble tiles ID div
        document.getElementById("scramble_tiles").appendChild(clone);   
            
        //use original this variable to update the innerHTML of the clicked tile
        this.innerHTML = checkMarkImg;
            
        
        }
        
        
    }
    
    
    

    

   
    
    
//WHEN HIDE ORIGINAL BUTTON IS CLICKED
    //add onclick handler
    //set it equal to a function that will hide the header
hideButton.onclick = hideHeader;
  
    
//end of function init  
}




//HIDE THE HEADER FUNCTION
function hideHeader() {
     
    //grab the elements to hide by ID
    var instructionsHide = document.getElementById("instructions");
    var headerHide = document.getElementById("orig_heading");
    var originalTiles = document.getElementById("originals");
    
    //call the hide function and pass the variables as parameters
    hide(instructionsHide);
    hide(headerHide);
    hide(originalTiles);
    
    //create the hide function, which sets the style display to none on the requested items
    function hide( toHide ) {
        toHide.style.display = "none";
    }
    
}