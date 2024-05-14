Hooks.once("ready", () => {
    game.settings.register("hashira-handbook-compendium", "show-readme", {
        name: "Aparecer o documento Leia-me na inicialização de mundo",
        hint: "Recomendado desativar somente quando for lido!!!",
        scope: "client",    
        config: true,       
        requiresReload: false, 
        type: Boolean,
        default: true,        
        onChange: value => { 
        console.log(value)
        }
    });

    let mostrarLeiame = game.settings.get('hashira-handbook-compendium', 'show-readme');

    if(mostrarLeiame){
        Hotbar.toggleDocumentSheet("Compendium.hashira-handbook-compendium.livro.JournalEntry.MOLjEHwO3oLZBk7m");
    }


});