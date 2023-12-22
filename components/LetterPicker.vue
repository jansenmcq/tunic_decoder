<template>
    <LetterEntry :active-strokes="activeStrokes" />
    <input :value="sound" placeholder="Sound" />
    <input :value="notes" />
    <button :disabled="!validateStrokes()" @click="startSave">
        Save
    </button>
</template>

<script setup lang="ts">
import { type LetterStroke } from '../models/letter';

const activeStrokes = ref(new Set<LetterStroke>());
const savingLetter = ref(false);
const sound = ref("");
const notes = ref("");

const validateStrokes = () => {
    let containsConsonantStrokes = false;
    let containsVowelStrokes = false;
    for (const stroke of activeStrokes.value) {
        if (letterStrokeIsVowel(stroke)) {
            containsVowelStrokes = true;
        } else if (letterStrokeIsConsonant(stroke)) {
            containsConsonantStrokes = true;
        }
    }
    return !(containsConsonantStrokes && containsVowelStrokes);
}

const startSave = () => {
    if (!validateStrokes()) {
        return false;
    };
    alert("saving");
}
</script>

<style scoped>
input {
    min-width: 180px;
    font-size: 16px;
}
</style>
