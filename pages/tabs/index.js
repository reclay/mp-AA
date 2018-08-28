Component({
    properties: {
        active: {
            type: Number,
            value: 0
        }
    },
    methods: {
        onChange(e) {
            this.triggerEvent('change', e.detail);
        }
    }
})