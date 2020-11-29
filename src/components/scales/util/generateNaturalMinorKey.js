     /***********NATURAL MINOR KEY********/
     export default function generateNaturalMinorKey(scaleDegree, numOfOctaves){
        //array for entire key
        var notesInKey = []; 
        //set range for 1 octave
        var range = 7;
        //add lowest tonic note
        notesInKey.push(scaleDegree);
       // I = 1 to equate to scale degrees
       for(i=1; i <= range; i++){
           if(i == 1 || i == 3 || i == 4 || i == 6){

               //Whole Step
               scaleDegree +=2;
               notesInKey.push(scaleDegree);
           }

           else if(i == 2 || i == 5){
               //Half Step
               scaleDegree +=1;
               notesInKey.push(scaleDegree);
           }
           else{
               //Whole Step
               scaleDegree +=2;
               notesInKey.push(scaleDegree);

               //Last degree of scale, reduce numOfOctaves
               numOfOctaves--;

               //if there's still octaves to go, start loop over
               if(numOfOctaves != 0){
                   i = 0
                   range = 7;
               }
           }
       }
       console.log("notesInKey Natural Minor: " + notesInKey)
       return notesInKey;
    }
     