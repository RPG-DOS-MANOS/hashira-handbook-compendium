Hooks.once("init", () => {
    delete CONFIG.DND5E.skills.arc;
    delete CONFIG.DND5E.skills.rel;
    CONFIG.DND5E.skills.dec.label = "Blefar";
});