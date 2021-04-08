const arr = [
  { id: "123", services: [{ id: "1" }, { id: "2" }, { id: "3" }] },
  { id: "999", services: [{ id: "4" }, { id: "5" }, { id: "6" }] }
];

// const array2 = arr.reduce((result, currentItem, index, arr) => {
//   // console.log("Previous value", result);
//   // console.log("currentItem", currentItem);
//   // console.log("index", index);
//   // console.log("arr", arr);

//   const tempVar = currentItem.services.map((element, indexMap, arrMap) => {
//     console.log("elementMap", element);
//     console.log("indexMAP", indexMap);
//     console.log("arrMap", arrMap);
//     return element.id;
//   });
//   console.log("TEMPVAR", tempVar);
//   // result.push(currentItem.id);
//   // const spreadArray = [...result, currentItem.id]
//   // console.log('Spread Arrya', spreadArray);
//   return [...result, ...tempVar];
// }, []);

// console.log("result Reduce", array2);

arr.reduce((result, currentItem) => {
  const tempVar = currentItem.services.map(element => element.id);
  return [...result, ...tempVar];
}, []);
