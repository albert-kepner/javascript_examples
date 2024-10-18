splitMessage = function(message, count)
{
  if (count < 1) {
    return null;
  }
  if (! message) {
    message = '';
  }
  let array = message.split('');
  let output = [];
  for(i = 0; i < count; i++) {
     output.push([]);   
  }
  let rotate = 0;
  for(j in array) {
    for(i = 0; i < count; i++) {
        let indicator = rotate % count;
        let msg = `(i,j,indicator) = (${i},${j},${indicator})`;
        // console.log(msg);
        if ( indicator % count == 0) {
            output[i].push(array[j])
        } else {
            output[i].push('-');
        }
        rotate++;
    }
    rotate--;
  }
  return output.map(x => x.join(''));
}

let s1 = splitMessage('Now is the Time.!!',3);
console.log('s1 = "'+s1+'"');