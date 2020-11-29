     export let notesInCurrentKey;
     
     /***********MAJOR KEY********/
     export default function generateMajorKey(scaleDegree, numOfOctaves){
        //array for entire key
        let scaleDegreeArray = []; 
        //set range for 1 octave
        var oneOctave = 8;
       //get total range of selected key
       let range = oneOctave * numOfOctaves;
       //Incrementing will add 1 note to scaleDegreeArray
       let counterToPopulateNotesInKey = 0;
       //Add scale degrees to scaleDegreeArray
       while (counterToPopulateNotesInKey <= range){
        counterToPopulateNotesInKey++;
        scaleDegreeArray.push(counterToPopulateNotesInKey);
       } 

        notesInCurrentKey = [];
       notesInCurrentKey.push(scaleDegree);

    for(let currentScaleDegree in scaleDegreeArray){
        if(currentScaleDegree > 6 && currentScaleDegree <14){
            currentScaleDegree = currentScaleDegree - 7;
        }
        if(currentScaleDegree > 13){
            currentScaleDegree = currentScaleDegree - 14;
        }
        if(numOfOctaves !== 0){

            if(currentScaleDegree == 0 || currentScaleDegree == 1 ||
                currentScaleDegree == 3 || currentScaleDegree == 4 || 
                currentScaleDegree == 5){
                //Whole Step
                scaleDegree +=2;
                notesInCurrentKey.push(scaleDegree);;
            }
            if(currentScaleDegree === 2){
                //Half Step
                scaleDegree +=1;
                notesInCurrentKey.push(scaleDegree);
            }
            if(currentScaleDegree === 6){
                //Half Step
                scaleDegree +=1;
                notesInCurrentKey.push(scaleDegree);
                numOfOctaves--;
            }
        }
    }
    console.log("notesInCurrentKey: " + notesInCurrentKey);
    return notesInCurrentKey;
    }






    //    for(i=1; i <= range; i++){
    //        if(i == 1 || i == 2 || i == 4 || i == 5 || i == 6){

    //            //Whole Step
    //            scaleDegree +=2;
    //            notesInKey.push(scaleDegree);
    //        }

    //        else if(i == 3){
    //            //Half Step
    //            scaleDegree +=1;
    //            notesInKey.push(scaleDegree);
    //        }
    //        else{
    //            //Half Step
    //            scaleDegree +=1;
    //            notesInKey.push(scaleDegree);

    //            //Last degree of scale, reduce numOfOctaves
    //            numOfOctaves--;

    //            //if there's still octaves to go, start loop over
    //            if(numOfOctaves != 0){
    //                i = 0
    //                range = 7;
    //            }
    //        }
    //    }

    //  //  console.log("notesInKey Major Key: " + notesInKey);
       
    // }