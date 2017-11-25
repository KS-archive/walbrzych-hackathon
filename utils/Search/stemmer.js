
module.exports = (word) => {
  let _word = word.toLowerCase();
  let stemmed;



  if(_word.includes('?')){
    return "";
  }

  if(_word.length === 1){
    return null;
  }

  if(_word.slice(-7) === "icznych"){
    _word =  _word.slice(0,_word.length-7);
  }

  if(_word.slice(-6) === "niowie"){
    _word =  _word.slice(0,_word.length-6);
  }

  if(_word.slice(-5) === "owych"){
    _word =  _word.slice(0,_word.length-5);
  }

  if(_word.slice(-5) === "iczne"){
    _word =  _word.slice(0,_word.length-5);
  }

  if(_word.slice(-4) === "niów"){
    _word =  _word.slice(0,_word.length-4);
  }

  if(_word.slice(-4) === "niow"){
    _word =  _word.slice(0,_word.length-4);
  }

  if(_word.slice(-3) === "owy"){
    _word =  _word.slice(0,_word.length-3);
  }

  if(_word.slice(-3) === "owe"){
    _word =  _word.slice(0,_word.length-3);
  }

  if(_word.slice(-3) === "ich"){
    _word =  _word.slice(0,_word.length-3);
  }

  if(_word.slice(-2) === "ow"){
    _word =  _word.slice(0,_word.length-2);
  }

  if(_word.slice(-2) === "ia"){
    _word =  _word.slice(0,_word.length-2);
  }

  if(_word.slice(-2) === "ie"){
    _word =  _word.slice(0,_word.length-2);
  }

  if(_word.slice(-2) === "ej"){
    _word =  _word.slice(0,_word.length-2);
  }

  if(_word.slice(-2) === "eń"){
    _word =  _word.slice(0,_word.length-2);
  }

  if(_word.slice(-1) === "u" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }

  if(_word.slice(-1) === "a" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }

  if(_word.slice(-1) === "y" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }

  if(_word.slice(-1) === "i" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }

  if(_word.slice(-1) === "ą" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }

  if(_word.slice(-1) === "ę" && _word.length > 3){
    _word =  _word.slice(0,_word.length-1);
  }


  stemmed = _word
//  console.log(stemmed)

  return stemmed;
};
