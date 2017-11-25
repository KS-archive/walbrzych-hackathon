var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
const stemm = require('./stemmer');

class Search{
  constructor(learningData, query){
    this.training_data = this._learn(learningData);
    this.training_data = this._removeSpecialCharacter(this.training_data);
    this.corpus_words = {};
    this.class_words = {};
    this.class = [];
    this.countCorpusClassWord();

    //console.log(this.class_words)
  };

  _learn(data){
    let _data = [];
    _data.push(...data.map(element => {
      return {"class": element._id, "sentence": (element.name)? element.name.toLowerCase(): null};
    }));

    _data.push(...data.map(element => {
      return {"class": element._id, "sentence": (element.category)? element.category.toLowerCase(): null};
    }));

    _data.push(...data.map(element => {
      return {"class": element._id, "sentence": (element.description)? element.description.toLowerCase(): null};
    }));

    return _data;
  };

  _removeSpecialCharacter(data){
    let _data = [];

    _data = data.map(element => {
      if(element.sentence){
        element.sentence = element.sentence.split('').filter(letter => {
          if(letter === ".") return false;
          if(letter === ",") return false;
          if(letter === ":") return false;
          if(letter === "$") return false;
          if(letter === "€") return false;
          if(letter === "(") return false;
          if(letter === ")") return false;
          if(letter === "{") return false;
          if(letter === "}") return false;
          if(letter === "[") return false;
          if(letter === "]") return false;
          if(letter === "-") return false;
          if(letter === "\"") return false;
          if(letter === "\'") return false;
          if(letter === "\t") return false;
          if(letter === "„") return false;
          if(letter === "”") return false;
          if(letter === "–") return false;
          if(letter === "/") return false;
          if(letter === "?") return false;
          if(letter === "!") return false;
          if(letter === "✔💕💕") return false;
          if(letter === "#💕💕") return false;
          if(letter.match(/[0-9]/i)) return false;

          else return true;
        });
        element.sentence = element.sentence.join('')
        element.sentence = element.sentence.split('').map(letter => {
          if(letter === "ż") return "z";
          if(letter === "ł") return "l";
          if(letter === "ó") return "o";
          if(letter === "ś") return "s";
          if(letter === "ą") return "a";
          if(letter === "ę") return "e";
          else return letter;
        });
        element.sentence = element.sentence.join('')
      }

      //console.log('[333]', element.sentence)
      return element;
    });

    return _data;
  };

  countCorpusClassWord(){
    this.classes = this.training_data.map(element => element.class);

    for(let el of this.classes){
      this.class_words[el] = [];
    };

    for(let el of this.training_data){
      if(el.sentence){
        for(let word of tokenizer.tokenize(el.sentence)){

          let stemmed_word = stemm(word);

          if(this.corpus_words[stemmed_word] === undefined){
            this.corpus_words[stemmed_word] = 1;
          }else{
            this.corpus_words[stemmed_word] +=1;
          }

          if(stemmed_word !== null) this.class_words[el.class].push(stemmed_word)
        }
      }

    }
  };

  calculateScore(sentence){
    let calculateClassScore = (sentence, class_name, class_words) => {
      let score = 0;

      let _sentence = sentence.split('').map(letter => {
        if(letter === "ż") return "z";
        if(letter === "ł") return "l";
        if(letter === "ó") return "o";
        if(letter === "ś") return "s";
        if(letter === "ą") return "a";
        if(letter === "ę") return "e";
        else return letter;
      });
      _sentence = _sentence.join('')

      for(let word of tokenizer.tokenize(_sentence)){
        if(class_words[class_name].includes(stemm(word))){
          score += (1/ this.corpus_words[stemm(word)]);
          console.log(`mach: ${stemm(word)}`)
        }
      }

      return score;
    };

    let _result = []
    //let sent = "Turniej piłki nożnej";
    for(let c of Object.keys(this.class_words)){
      let _score = calculateClassScore(sentence, c, this.class_words);
      if(_score !== 0) _result.push({id: c, score: _score});
      //console.log(`Class: ${c}  Score:  ${calculateClassScore(sentence, c, this.class_words)}`)

      //print ("Class: %s  Score: %s \n" % (c, calculate_class_score(sentence, c)))
    }

    return _result;
  }
}



module.exports = (data, query) => new Search(data, query);

