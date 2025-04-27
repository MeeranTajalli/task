function bxlendExchangeSequence(start, end) {
    const sequence = [];
  
    for (let i = start; i <= end; i++) {
      
        if (i % 3 === 0 && i % 5 === 0) {
        
            sequence.push("BxlendExchange");
    }
      else if (i % 3 === 0) {
        
        sequence.push("Bxlend"); }
         else if (i % 5 === 0) {
       
        sequence.push("Exchange");
      } 
      else {
        sequence.push(i);
         }
    }
  
    return sequence;
  }
  

  const start = 1;
  const end = 20;
  
  const sequence = bxlendExchangeSequence(start, end);
  console.log(sequence);
  