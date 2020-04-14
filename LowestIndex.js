function indexEqualsValue(arr){
    var result = -1
    arr.some((iter,index) =>{     //using Some to break the iteration when found
      if(iter == index){
        result = index
        return true
      }
    })
    return result
  }
  var arr = [-8,0,2,5]
  console.log(indexEqualsValue(arr))