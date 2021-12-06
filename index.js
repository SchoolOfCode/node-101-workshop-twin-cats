//3 
// import myCollection from "./collection.js";

// 2b

let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!"
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory"
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)"
  }
];


  //console.log(myCollection);

// 2c
  function describeItem(item) {
    for (let i=0;i<myCollection.length;i++) {
      if (item === myCollection[i].name) {
        // console.log(" I have " + myCollection[i].count + " item(s).");
        let itemCount = myCollection[i].count
        if (itemCount === 1) {
          console.log("I have a " + myCollection[i].name + ". Here's what I like about it: " + myCollection[i].whatILike);
        }
        else if (itemCount > 1) {
          console.log("I have " + myCollection[i].name + "s. Here's what I like about them: " + myCollection[i].whatILike);
        }
      }
  }
}

describeItem("School of Code mug")



function describeCollection(array) {
  for (let i=0;i<array.length;i++) {
    describeItem(array[i].name)
  }
}

// describeCollection(myCollection)

//4 - NPM and node packages
