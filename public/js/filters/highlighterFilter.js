define(['bootstrap'],function(app){
  var highlighter = function(){
    return function(text,selectedWord){
      if(selectedWord){
        for(var p in selectedWord){
          var pattern = new RegExp(selectedWord[p],"g");
          text = text.replace(pattern,'<b class="highlighter">'+selectedWord[p]+"</b>");
        }
        return text;
      }
      else{
        return text;
      }
    }
  };
  app.$filterProvider.register('highlighter',highlighter);
});
