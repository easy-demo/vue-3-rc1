import { defineComponent } from 'vue';

// The error only reported when we set `"declaration": true` in file tsconfig.json
export const MyComponent = defineComponent({
    setup() {
        return () => null;
    },
});