<template>
    <div class="stroke-container"
        :class="{ left: tilt === 'left', right: tilt === 'right', vertical: tilt === 'vertical' }">
        <div class="border" :class="{ active: isActive, long: isLong, circle: tilt === 'circle' }">
        </div>
    </div>
</template>

<script setup lang ="ts">
const props = defineProps<{ tilt: "left" | "right" | "vertical" | "circle", isActive: boolean, isLong: boolean }>();

</script>

<style scoped>
.stroke-container {
    padding: 4px;
    padding-bottom: 8px;
    cursor: pointer;
    max-width: max-content;
    max-height: max-content;

    &.vertical {
        padding: 4px;
        padding-right: 8px;
    }
}

.border {
    width: 90px;
    height: 4px;
    border-width: 1px;
    border-color: rgba(1, 1, 1, .3);
    border-bottom-style: solid;

    &.active {
        border-color: black;
        border-width: 2px;
    }

    &.circle {
        height: 40px;
        width: 40px;
        border-style: solid;
        border-radius: 100%;
    }
}

.left {
    transform: rotate(-30deg);
}

.right {
    transform: rotate(30deg);
}

.vertical .border {
    height: 90px;
    width: 4px;
    border-bottom: none;
    border-right-style: solid;

    &.long {
        height: 190px;
    }
}
</style>
