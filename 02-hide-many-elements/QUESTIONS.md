# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I used .getElementsByClassName (), where inside I indicated the class of elements that I need (in my case "hide_me"). After that, I gave all the selected elements under this class the property to hide when the button is clicked.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

To hide each element, I used a loop, where I indicated the size of the loop and what needed to be done with each attribute of this class. 