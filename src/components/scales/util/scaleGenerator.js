import generateMajorKey from "./generateMajorKey";

//Takes User Input and generates scale and range
export default function keyGeneratorController(scaleDegree, scaleName, numOfOctaves){
    let notesInKey = null;
    console.log('degree, name, octaves :>> ', scaleDegree, scaleName, numOfOctaves);

    if(scaleName === 'Major'){
      notesInKey = generateMajorKey(scaleDegree, numOfOctaves);
      console.log('notesInKey :>> ', notesInKey);
    }
    else if(scaleName === 'Minor'){
   //    notesInKey = generateNaturalMinorKey(scaleDegree, numOfOctaves);
    }
    else if(scaleName === 'Harmonic Minor'){
  //      notesInKey = generateHarmonicMinorKey(scaleDegree, numOfOctaves);
    }
    else if(scaleName === 'Pentatonic Minor'){
   //     notesInKey = generatePentatonicMinorKey(scaleDegree, numOfOctaves);
    }
    return notesInKey;
}