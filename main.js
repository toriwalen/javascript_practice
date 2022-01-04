// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, DNAArr) {
 return{
  specimenNum: num,
  dna: DNAArr,
  mutate(){
    let indexToMutate = Math.floor(Math.random() * DNAArr.length);
    let baseToMutate = this.dna[indexToMutate];
    let mutatedBase = returnRandBase();
    while(baseToMutate === mutatedBase){
      mutatedBase = returnRandBase();
    }
    this.dna[indexToMutate] = mutatedBase;
    return this.dna;
  },
  compareDNA(pAequorIn){
    let numSameBases = 0;
    for(let i = 0; i < pAequorIn.dna.length; i++){
      if(this.dna[i] === pAequorIn.dna[i]){
        numSameBases += 1;
      }
    }
    let percentSame = Math.floor((numSameBases/pAequorIn.dna.length)*100);
    console.log (`p. Aequor number ${this.specimenNum} and p. Aequor number ${pAequorIn.specimenNum} share ${percentSame} % of their DNA.`);
  },
  willLikelySurvive(){
    let numCOrG = 0;
    for(let i = 0; i < this.dna.length; i++){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        numCOrG += 1;
      }
    }
    let percentCG = Math.floor((numCOrG / this.dna.length)*100);
    if (percentCG > 60){
      return true;
    } else {
      return false;
    }
  }
 }
}

//const p1 = pAequorFactory(1 ,['A','G','G','C']);
//const p2 = pAequorFactory(2 ,['T', 'T', 'A','C']);
//console.log(p1.willLikelySurvive());

const thirtypAequors = () => {
  let pAequorArray = [];
  for(let i = 0; i < 30; i++){
    pAequorArray.push(pAequorFactory(i, mockUpStrand()));
  }
  return pAequorArray;
}
console.log(thirtypAequors());

console.log("change");




