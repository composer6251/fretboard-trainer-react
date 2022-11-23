import NoteContainer from "./components/note/note.container.component";
import StaffComponent from "./components/staff/staff.component";
/***
 *  * = MVP
 * Fretboard page state:
 * <StaffContainer>
 *  GeneratedStaff *
 *  Active note/s * 
 *  Selected Scale *
 * 
 *  Num of ledger Lines
 *  Clef - From SettingsDrawer. Set up event listener
 *  
 *  <NoteContainer>
 *      Note Name (C8 - C1)
 * 
 * <FretboardContainer >
 *   * GeneratedFretboard
 *   *  Active note/s 
 *   *  Selected Scale 
 *   * <ClickableFret>
 * 
 * Fretboard Container:
 */
<AppContainer> 
    <AppNavigationHeader> 
    </AppNavigationHeader>
    <AppSettingsDrawer options={"opt1, opt2"}/>
    <PageContentComponent>
        <StaffContainer>
            <StaffComponent ledgerLines="2" scale="CMajor" activeNotes={"C4, D4"}>
                <ClefComponent clef="treble"/>
                <NoteContainer>
                    <Note></Note>
                </NoteContainer>
            </StaffComponent>
        </StaffContainer>
        <FretboardContainer>
            <Fretboard>
                <ClickableFret prop="noteName"/>
            </Fretboard>
        </FretboardContainer>
    </PageContentComponent>
</AppContainer>