Vue.component("exponential-upgrade", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="'<span class=` + 'aleph' + `>EP</span>'"></resource-upgrade>`
});
