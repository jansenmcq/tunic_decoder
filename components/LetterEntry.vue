

<template>
    <div class="letter-canvas">
        <LetterStroke class="stroke" v-for="stroke in strokes" :key="stroke.stroke" :id="stroke.stroke"
            :isLong="stroke.stroke === ConsonantStroke.C4 || stroke.stroke === VowelStroke.V3"
            @click="handleClick(stroke.stroke)" :isActive="activeStrokes.has(stroke.stroke)" :tilt="stroke.tilt" />
    </div>
</template>

<script setup lang="ts">
import { strokes, ConsonantStroke, type LetterStroke, VowelStroke } from '../models/letter';
const { activeStrokes } = defineProps<{ activeStrokes: Set<LetterStroke> }>();
const handleClick = (stroke: LetterStroke) => {
    if (activeStrokes.has(stroke)) {
        activeStrokes.delete(stroke);
    } else {
        activeStrokes.add(stroke);
    }
}


</script>

<style scoped>
.letter-canvas {
    position: relative;
    width: 400px;
    min-height: 480px;
    max-height: 80%;
    height: 80%;
    border: solid black 1px;
}

.stroke {
    position: absolute;

    &#V1 {
        left: calc(48% - 100px);
        top: calc(57% - 240px);
    }

    &#V2 {
        left: calc(48% + 20px);
        top: calc(57% - 240px);
    }

    &#V3 {
        left: calc(48% - 100px);
        top: calc(57% - 140px);
    }

    &#V4 {
        left: calc(48% - 100px);
        top: calc(57% + 140px);
    }

    &#V5 {
        left: calc(48% + 20px);
        top: calc(57% + 140px);
    }

    &#C1 {
        left: calc(48% - 100px);
        top: calc(57% - 180px);
    }

    &#C2 {
        left: 48%;
        top: calc(57% - 240px);
    }

    &#C3 {
        left: calc(48% + 20px);
        top: calc(57% - 180px);
    }

    &#C4 {
        left: 48%;
        top: calc(57% - 140px);
    }

    &#C5 {
        left: calc(48% - 100px);
        top: calc(57% + 80px);
    }

    &#C6 {
        left: 48%;
        top: calc(57% + 60px);
    }

    &#C7 {
        left: calc(48% + 20px);
        top: calc(57% + 80px);
    }

    &#O1 {
        left: calc(48% - 15px);
        top: calc(57% + 180px);
    }


}
</style>