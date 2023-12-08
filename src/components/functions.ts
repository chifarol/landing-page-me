export function searchByTerm(arr: any[],searchTerm:string) {
  if (searchTerm) {
    const filteredArr = arr.filter((item: any, index) => {
      for (const [key, value] of Object.entries(item)) {
        if (item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
      }
    });
    return filteredArr;
  } else {
    return arr;
  }
}