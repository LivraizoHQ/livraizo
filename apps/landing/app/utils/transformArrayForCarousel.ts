function normalizeLength(array: any[], length: number) {
    if (length % 2 !== 0) {
      array = [...array, array[0]];
    }
  
    // If the input array is shorter than the required length, duplicate the elements
    while (array.length < length) {
      array = array.concat(array);
    }
  
    return array;
  }
  
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    return array;
  }
  export default function transformArrayForCarousel(arr: any[], length: number) {
    arr = normalizeLength(arr, length);
  
    arr = shuffleArray(arr);
    // Divide the array into two equal parts
    const halfLength = length / 2;
    const firstPart = arr.slice(0, halfLength);
    const secondPart = arr.slice(halfLength, length);
  
    return [firstPart, secondPart];
  }
  