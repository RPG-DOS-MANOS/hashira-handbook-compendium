Hooks.once("init", () => {
    delete CONFIG.DND5E.skills.arc;
    delete CONFIG.DND5E.skills.rel;
    CONFIG.DND5E.skills.dec.label = "Blefar";



    CONFIG.DND5E.sourcePacks.BACKGROUNDS = "hashira-handbook-compendium.antecendentes";
    CONFIG.DND5E.sourcePacks.RACES = "hashira-handbook-compendium.racas";
    CONFIG.DND5E.sourcePacks.CLASSES = "hashira-handbook-compendium.classes";

   



});