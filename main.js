let addToButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToButton.addEventListener('click',function(){
    var paragraph=document.createElement('p')

    //add styling to the paragraph
    paragraph.classList.add('paragraph-styling')

    //gets the text and makes it a value for the inputField
    paragraph.innerText = inputField.value;

    //add to div the paragraph
    toDoContainer.appendChild(paragraph);

    //when item added makes the input area blank
    inputField.value="";

    //event listener that puts line throught the item
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through"
    })
    /*this event listener is a double click that will remove
    the item*/
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })

})
