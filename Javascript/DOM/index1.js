//Fetching an element

    //Using get element by id
    let heading = document.getElementById("head");
    console.log(heading);

    //Using get element by class
    let para = document.getElementsByClassName("para");
    console.log(para);

    //Using get element by tag name
    let tagN = document.getElementsByTagName("p");
    let tagH = document.getElementsByTagName("h2");
    console.log(tagN);

    //Using get element by query selector
    let qSel = document.querySelector(".para");
    console.log(qSel);

    //Using get element by query selector all
    let qSelAll = document.querySelectorAll(".para");
    console.log(qSelAll);



//Update existing elements content
    let newElement = document.querySelector(".main");  
    //Using innerHTML
    newElement.innerHTML = '<a href="www.google.com">google</a>';
   
    // //Using outerHTML
    console.log(newElement.outerHTML);
    
    //Using innerText
    let anch = document.querySelector("a");
   console.log(anch.innerText);

    // //Using textContent shows hidden content as well
    console.log(anch.textContent);
   
//Creating new elements and content

    //creating element using CreateElement and then appending it
    newElement.appendChild(document.createElement("h2"));

    //Creating content and appending it
    newElement.appendChild(document.createTextNode("hi there im heading"));

    //adding adjacent element by insert AdjacentHTML
    newElement.insertAdjacentHTML("beforebegin","<h1>hello ji</h1>");

    //removing element by .removeChild
    newElement.removeChild(child_extracted_element);


//Adding css to the elements using multiple ways

    //By .css
    newElement.style.color="red";
    
    //By .cssText
    newElement.style.cssText =  "background-color: pink; color: blue;"

    //By .setAttribute
    newElement.setAttribute("style", "background-color:red;");
    newElement.setAttribute("id", "new");

    //By .className
     // newElement.className = "main1";

    //By .classList
    Element.classList.add("");
                     .remove("");
                     .toggle("");
                     .contain("");