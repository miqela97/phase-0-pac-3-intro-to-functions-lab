function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
  console.log = `I can't hear you!`
  console.log(string.toUpperCase());
  console.log(string === string.toUpperCase());
  return string;
}
