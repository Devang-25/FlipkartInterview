function removeSpecial(str){
    var newStr = str.split('')   //Converting String into array
    var newArray = []          
    newStr.map(iter =>{
      if(iter!=='#'){           
        newArray.push(iter)
      } else{
        newArray.pop()
      }
    })
    return newArray.join('')
 }
 
 console.log(removeSpecial('ab##c'))
 
 