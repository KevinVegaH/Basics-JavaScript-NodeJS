const findAndReplaceElement = () => {
  const listElement = [];
  for (let i = 1; i <= 10; i++) {
    listElement.push({ id: i });
  }

  const objectToCompare = { id: 5, message: "Done!" };

  // .findIndex() find the element index into the array.
  const indexElement = listElement.findIndex(
    (element) => element.id === objectToCompare.id
  );

  if (indexElement !== -1) {
    //.splice('index to start', 'many elements to remove o replace from the index', 'item to replace');
    listElement.splice(indexElement, 1, objectToCompare);
    console.log(listElement);
  } else {
    console.log("Id not found");
  }
};

findAndReplaceElement();
