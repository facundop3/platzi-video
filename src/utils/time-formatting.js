const leftPad = (number)=>{
  const pad = "00"
  const num = isNaN(number) ? number : number.toString()
  return pad.substring(0, pad.length- num.length) + num
}

export const formatedTime = (secs) => {
  const minutes = parseInt(secs/60 , 10)
  const seconds = parseInt( secs %60 , 10)
  return `${leftPad(minutes)}:${leftPad(seconds)}` 
}