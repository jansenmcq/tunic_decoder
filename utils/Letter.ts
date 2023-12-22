import { type LetterStroke, VowelStroke, ConsonantStroke } from "../models/letter";

const ConsonantStrokes: LetterStroke[] = [ConsonantStroke.C1, ConsonantStroke.C2, ConsonantStroke.C3, ConsonantStroke.C4, ConsonantStroke.C5, ConsonantStroke.C6, ConsonantStroke.C7];
const VowelStrokes: LetterStroke[] = [VowelStroke.V1, VowelStroke.V2, VowelStroke.V3, VowelStroke.V4, VowelStroke.V5];


export function letterStrokeIsConsonant(stroke: LetterStroke): stroke is ConsonantStroke {
    return ConsonantStrokes.includes(stroke);
}

export function letterStrokeIsVowel(stroke: LetterStroke): stroke is VowelStroke {
    return VowelStrokes.includes(stroke);
}