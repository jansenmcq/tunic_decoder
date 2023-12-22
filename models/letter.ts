export enum ConsonantStroke {
  C1 = "C1",
  C2 = "C2",
  C3 = "C3",
  C4 = "C4",
  C5 = "C5",
  C6 = "C6",
  C7 = "C7"
}

export enum VowelStroke {
  V1 = "V1",
  V2 = "V2",
  V3 = "V3",
  V4 = "V4",
  V5 = "V5"
}

export enum OtherStroke {
  O1 = "O1",
  O2 = "O2"
}

export type LetterStroke = ConsonantStroke | VowelStroke | OtherStroke;

/*
Vowel:

   1 * 2
*       *          
3
*       *
  4  * 5


Consonant:

*   *   *
   1 2  3
     *
     4
     *
   5 6  7 
*    *   *


Other:

bottom circle O1

circled O2


*/

export interface Letter {
  id: number;
  type: "vowel" | "consonant" | "other";
  strokes: LetterStroke[];
  sound: string;
  notes?: string;
}

export const strokes: { stroke: LetterStroke, tilt: "left" | "right" | "vertical" | "circle" }[] = [
  { stroke: VowelStroke.V1, tilt: "left" },
  { stroke: VowelStroke.V2, tilt: "right" },
  { stroke: VowelStroke.V3, tilt: "vertical" },
  { stroke: VowelStroke.V4, tilt: "right" },
  { stroke: VowelStroke.V5, tilt: "left" },
  { stroke: ConsonantStroke.C1, tilt: "right" },
  { stroke: ConsonantStroke.C2, tilt: "vertical" },
  { stroke: ConsonantStroke.C3, tilt: "left" },
  { stroke: ConsonantStroke.C4, tilt: "vertical" },
  { stroke: ConsonantStroke.C5, tilt: "left" },
  { stroke: ConsonantStroke.C6, tilt: "vertical" },
  { stroke: ConsonantStroke.C7, tilt: "right" },
  { stroke: OtherStroke.O1, tilt: "circle" },
]