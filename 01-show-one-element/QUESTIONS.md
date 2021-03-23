# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

In this case, when the page is refreshed, the text will become hidden again, because the program starts its action on a new one and everything returns to its original position. The hidden text appears only when you click on the link - this is how this code works. 

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

In this case, the link no longer opens the text, because this code is an event that loads the entire Java Script when the page is loaded, and without it, the rest of the code does not matter. 

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

He needs to be told what event he expects and what to do when it happens.
