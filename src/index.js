module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let arr2 = [];
  let open = [];
  let close = [];
  let skob = [];
  let ravskob = [];

  for (let i = 0; i < str.length; i ++){
    for (let j = 0; j < bracketsConfig.length; j ++){
      if ((str[i] == bracketsConfig[j][0]) || (str[i] == bracketsConfig[j][1])){
        arr.push(str[i]);
      }
    }
  }

  for (let i = 0; i < bracketsConfig.length; i ++){
    skob[i] = '' + bracketsConfig[i][0] + '' + bracketsConfig[i][1];
    if (bracketsConfig[i][0] == bracketsConfig[i][1]){
      ravskob.push(String(bracketsConfig[i][0]));
    }
  }

  for (let i = 0; i < str.length; i ++){
    for (let j = 0; j < bracketsConfig.length; j ++){
      if (str[i] == bracketsConfig[j][0]){
        open.push(str[i]);
      }
      if (str[i] == bracketsConfig[j][1]){
        close.push(str[i]);
      }
    }
  }
  
 if (open.length != close.length){
   return false;
 }
 
  if ((close.includes(arr[0]) == true) && (ravskob.includes(arr[0]) == false)){
    return false;
  }
  else {
    for (let j = 0; j < arr.length; j++){
      if (j == 0){
        arr2.push(arr[j])
      }
      else {
        if ((open.includes(arr[j]) == true) && (ravskob.includes(arr[j]) == false)){
          arr2.push(arr[j])
          }
          else {
            if ((ravskob.includes(arr[j]) == true) && (arr2[arr2.length-1] != arr[j])){
              arr2.push(arr[j])
            }
            else {
              let str2 = '' + arr2[arr2.length - 1] + '' + arr[j];
              if (skob.includes(str2) == true){
                arr2.pop();
              }
              else {
                return false;
              }
            }
          }
        }
      }
    }
  return true;
  // your solution
}
