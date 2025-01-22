import * as Tone from "tone";

export class Makenoise {

 constructor() {
  
 }

 noise() {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", now);
 }
}



