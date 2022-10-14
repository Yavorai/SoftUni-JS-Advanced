// function createSortedList() {
//   let list = [];

//   function add(element) {
//     list.push(element);
//     this.size++;
//     list.sort((a, b) => a - b);
//   }
//   function remove(index) {
//     if (index >= 0 && index < list.length) {
//       list.splice(index, 1);
//       this.size--;
//     }
//   }
//   function get(index) {
//     if (index >= 0 && index < list.length) {
//         return list[index]
//       }
//   }

//   return {
//     size: 0,
//     add,
//     remove,
//     get,
//   };
// }

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
function createSortedList() {
  let arr = []

  return {
    add(element){
      arr.push(element)
      this.size++
      arr.sort((a,b) => a-b)
    },

    remove(index){
      if(index < 0 || index >= arr.length){
        throw new RangeError(`index oit of range`)
      }
      arr.splice(index,1)
      this.size--
    },

    get(index){
      if(index < 0 || index >= arr.length){
        throw new RangeError(`index oit of range`)
      }
      return arr[index]
    },
    size: 0,
  }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
