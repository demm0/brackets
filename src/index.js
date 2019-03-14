module.exports = function check(str, bracketsConfig) {
    let arr = [];
  let arr2 = [];
  let open = [];
  let close = [];
  let skob = [];

  for (let i = 0; i < str.length; i ++){
    for (let j = 0; j < bracketsConfig.length; j ++){
      if ((str[i] == bracketsConfig[j][0]) || (str[i] == bracketsConfig[j][1])){
        arr.push(str[i]);
      }
    }
  }

  for (let i = 0; i < bracketsConfig.length; i ++){
    skob[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
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

  if(close.includes(arr[0]) == true){
    return false;
  }
  else {
    for (let j = 0; j < arr.length; j++){
      if (j == 0){
        arr2.push(arr[j])
      }
      else {
        if (open.includes(arr[0]) == true){
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
  return true;
  // your solution
}
