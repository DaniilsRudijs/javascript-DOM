# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used the .querySelectorAll () function because the .getElementsByClassName () function only takes one argument, while .querySelectorAll () allows you to get more specific information. As an argument, I set "ul.second_five li", which tells the computer to find all tags with the class "ul", then from these tags you can take only those that are marked with "second_five". 