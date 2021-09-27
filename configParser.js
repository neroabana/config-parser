var words = [
    'spacejump',
    'apples',
    'graphics',
    'javascript',
    'peaches'
];

var configs = [{
    upper_case:'first',
    length:[6,8]
},{
    upper_case:'last',
    length:[7,9],
    strip:'vowels'
},{
    length:10,
    strip:'consonants'
}]

var final_words = [];
/////////////////////////

  const number_length = (word_array, figure) => {
    let temp = word_array.filter((v, i, arr)=>{if (v.length === figure){return v}});
    return temp;  
  }
  
  const number_array = (word_array, range) => {    
    let temp = word_array.filter((v, i, arr)=>{if ((v.length >= range[0]) && (v.length <= range[1])){return v}});    
    return temp;
  }
  
  const ucf = list => list.map(w=>w.slice(0,1).toUpperCase() + w.slice(1,));
  
  const ucl = list => list.map(w=>w.slice(0,-1) + w.slice(-1).toUpperCase());
  
  const strip_vowels = (word_array) => {
    let temp = word_array.map((v, i, arr)=>{
      let w = v.split("");
      let buffer = w.filter((val, i, arr2)=>{
        if ((val != "a") && (val != "e") && (val != "i") && (val != "o") && (val != "u")){return val}
      });     
      return buffer.join("");
    });
    return temp;
  }
  
  const strip_consonants = (word_array) => {
    let temp = word_array.map((v, i, arr)=>{
      let w = v.split("");
      let buffer = w.filter((val, i, arr2)=>{
        if ((val === "a") || (val === "e") || (val === "i") || (val === "o") || (val === "u")){return val}
      });      
      return buffer.join("");
    });   
    return temp;
  }

const fn = (words, configs) => { 
    
  configs.forEach((value, index, arr)=>{
    let temp = [...words];
    
    if (value.length){
      if(Number(value.length)){        
        temp = number_length(temp, value.length);       
      }
      
      if(Array.isArray(value.length)){             
        temp = number_array(temp, value.length);       
      }      
    }
    
    if (value.upper_case){
      if(value.upper_case === "first"){       
        temp = ucf(temp);       
      }
      
      if(value.upper_case === "last"){       
        temp = ucl(temp);       
      }           
    }
    
    if (value.strip){
      if(value.strip === "vowels"){            
        temp = strip_vowels(temp);        
      }
      
      if(value.strip === "consonants"){        
        temp = strip_consonants(temp);       
      }              
    }
    
    final_words.push(temp);   
    
  });  
  
  console.log(final_words);    
}

fn(words, configs);