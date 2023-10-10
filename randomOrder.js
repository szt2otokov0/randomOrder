window.onload = () => {
  let days = [
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
    "vasárnap",
  ];
  console.log("array shuffled: " + getRandomOrder(days));
  function getRandomOrder(array) {
    let newArr = [];
    for (let i = array.length; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      newArr.push(array.splice(index,1));
    }
    return newArr;
  }
};
