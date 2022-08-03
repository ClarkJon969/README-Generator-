
function renderMdFile(num){ //take in num 
    var str = '';
    for(var i = 0; i < num; i++){
      str += "Fake ";
    }
    return str;
  }
  
  function generateFakeStuff(data){
    return `
    ## Fakes
  
    ${renderFakes(data.numFakes)}
    `;
  }
  
  module.exports = generateFakeStuff;