// Your code here
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i])
    }
    return r
  }

  function mapToNoChange(array) {
      let newArray = []

      for(let i = 0; i < array.length; i++ ){
          newArray.push(array[i])
      }
      return newArray
  }

  function mapToDouble(array) {
      let newArray = []
      for(let i=0;i < array.length; i++ ) {
          newArray.push(2 * array[i])
      }
      return newArray
  }

  function mapToSquare(array) {
      let newArray= []

      for(let i =0 ; i< array.length; i++) {
          newArray.push(array[i] * array[i])
      }

      return newArray
  }

  function reduceToTotal(array, startingPoint=0) {
    let memo = startingPoint
    for (let i =0; i < array.length; i++){
       memo = memo + array[i]
    }

    return memo
  }

  function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (!array[i]) return false
      }
      return true
  }

  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }