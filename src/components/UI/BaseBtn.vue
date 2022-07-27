<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :type="nativeType"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <span class="v-btn__slot"><slot /></span>
  </component>
</template>

<script>
const nativeTypes = ['button', 'submit', 'reset'];
const availableSizes = [null, 'tiny', 'small', 'large', 'huge'];
const availableTags = ['button', 'a', 'input', 'router-link', 'nuxt-link', 'n-link', 'NuxtLink', 'NLink'];
const availableThemes = ['white', 'black', 'primary', 'secondary'];
</script>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps( {
        block: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        nativeType: { type: String, default: 'button', validator: (value:string) => nativeTypes.includes(value) },
        outline: { type: Boolean, default: false },
        size: { type: String, default: null, validator: (value: string) => availableSizes.includes(value) },
        tag: { type: String, default: 'button', validator: (value: string) => availableTags.includes(value) },
        text: { type: Boolean, default: false },
        theme: { type: String, default: 'primary', validator: (value: string) => availableThemes.includes(value) },
    })
const buttonClasses = computed(()=>{
    return {
        'v-btn': true,
        [`v-btn--${props.theme}`]: props.theme,
        [`v-btn--${props.size}`]: props.size,
        'v-btn--block': props.block,
        'v-btn--disabled': props.disabled,
        'v-btn--loading': props.loading,
        'v-btn--outlined': props.outline,
        'v-btn--text': props.text,
    };

})

</script>

<style scoped lang="scss">

$button-size-map: (
    null: (padding: 1rem,
    ),
    '--tiny': (font-size: 80%,
        padding: 0.225rem,
    ),
    '--small': (font-size: 90%,
        padding: 0.5rem,
    ),
    '--large': (font-size: 110%,
        padding: 1.5rem,
    ),
    '--huge': (font-size: 120%,
        padding: 1.75rem,
    ),
    ) !default;
$button-theme-names: (
    '--primary',
    '--secondary',
    '--white',
    '--black') !default;
$default-theme-map: (
    'all': ('disabled': (opacity: 0.5,
        ),
    ),
    '--primary': ('styles': (background-color: color('primary'),
            border: 1px solid color('primary'),
            color: color('white'),
        ),
        'hover': (background-color: lighten(color('primary'), 10%),
            border-color: lighten(color('primary'), 10%),
        ),
    ),
    '--secondary': ('styles': (background-color: color('secondary'),
            border: 1px solid color('secondary'),
            color: color('black'),
        ),
        'hover': (background-color: lighten(color('secondary'), 10%),
            border-color: lighten(color('secondary'), 10%),
        ),
    ),
    '--white': ('styles': (background-color: color('white'),
            border: 1px solid color('white'),
            color: color('black'),
        ),
        'hover': (background-color: darken(color('white'), 5%),
            border-color: darken(color('white'), 5%),
        ),
    ),
    '--black': ('styles': (background-color: color('black'),
            border: 1px solid color('black'),
            color: color('white'),
        ),
        'hover': (background-color: lighten(color('black'), 15%),
            border-color: lighten(color('black'), 15%),
        ),
    ),
    ) !default;
$outline-theme-map: (
    'all': ('styles': (background-color: transparent,
        ),
        'disabled': (opacity: 0.5,
        ),
    ),
    '--primary': ('styles': (color: color('primary'),
        ),
        'hover': map-deep-get($default-theme-map, '--primary', 'styles'),
    ),
    '--secondary': ('styles': (color: color('secondary'),
        ),
        'hover': map-deep-get($default-theme-map, '--secondary', 'styles'),
    ),
    '--white': ('styles': (color: color('white'),
        ),
        'hover': map-deep-get($default-theme-map, '--white', 'styles'),
    ),
    '--black': ('styles': (color: color('black'),
        ),
        'hover': map-deep-get($default-theme-map, '--black', 'styles'),
    ),
    ) !default;
$text-theme-map: (
    'all': ('styles': (background: none,
            border: none,
        ),
        'disabled': (opacity: 0.5,
        ),
    ),
    '--primary': ('styles': (color: color('primary'),
        ),
        'hover': (background-color: color('white-two'),
        ),
    ),
    '--secondary': ('styles': (color: color('secondary'),
        ),
        'hover': (background-color: color('white-two'),
        ),
    ),
    '--white': ('styles': (color: color('white'),
        ),
        'hover': (background-color: color('white-two'),
        ),
    ),
    '--black': ('styles': (color: color('black'),
        ),
        'hover': (background-color: color('white-two'),
        ),
    ),
    ) !default;
$button-type-theme-maps: (
    null: $default-theme-map,
    '--outlined': $outline-theme-map,
    '--text': $text-theme-map,
    ) !default;
$button-default-styles: (
    border: 1px solid transparent,
    border-radius: 2px,
    outline: none,
    ) !default;

.v-btn {
    cursor: pointer;
    @include styles-from-map($button-default-styles
);
}

.v-btn--block {
    display: block;
    width: 100%;
}

.v-btn--disabled {
    cursor: not-allowed;
}

.v-btn--loading {
    pointer-events: none;
    position: relative;

    .v-btn__slot {
        color: transparent;
    }

    &::after {
        animation: animSpin 0.5s infinite linear;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-top-color: transparent;
        content: '';
        display: block;
        height: 1em;
        left: calc(50% - 0.5em);
        position: absolute;
        top: calc(50% - 0.5em);
        width: 1em;
    }
}
