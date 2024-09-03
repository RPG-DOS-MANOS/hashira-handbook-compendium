Hooks.once("init", () => {
  // Tipos de Armas
    CONFIG.DND5E.weaponTypes.unico = "Armas Únicas";
    CONFIG.DND5E.weaponProficiencies.unico = "Armas Únicas";
    CONFIG.DND5E.weaponProficienciesMap.unico = "unico";

    CONFIG.DND5E.weaponTypes.pesado = "Armas Pesadas";
    CONFIG.DND5E.weaponProficiencies.pesado = "Armas Pesadas";
    CONFIG.DND5E.weaponProficienciesMap.pesado = "pesado";

    CONFIG.DND5E.weaponTypes.fogo = "Armas de Fogo";
    CONFIG.DND5E.weaponProficiencies.fogo = "Armas de Fogo";
    CONFIG.DND5E.weaponProficienciesMap.fogo = "fogo";
    
    

    //Armas pesadas Id
    CONFIG.DND5E.weaponIds.halberd = "Compendium.hashira-handbook-compendium.itens.Item.lYXZYxvWgahhBlpW";
    CONFIG.DND5E.weaponIds.greatclub = "Compendium.hashira-handbook-compendium.itens.Item.Vd0uaZY6VWSW7Ghk";
    CONFIG.DND5E.weaponIds.greatsword = "Compendium.hashira-handbook-compendium.itens.Item.63CGJHZYSQ16bndA";
    CONFIG.DND5E.weaponIds.glaive = "Compendium.hashira-handbook-compendium.itens.Item.FOAVQunCQCK0O27H";
    CONFIG.DND5E.weaponIds.pike = "Compendium.hashira-handbook-compendium.itens.Item.GRJgGxR8GxXJP2vV";
    CONFIG.DND5E.weaponIds.greataxe = "Compendium.hashira-handbook-compendium.itens.Item.k44PQqfbVJ6VDmxN";
    CONFIG.DND5E.weaponIds.maul = "Compendium.hashira-handbook-compendium.itens.Item.xI1AHUpEusPE3y0k";

    //Armas unicas Id
    CONFIG.DND5E.weaponIds.katana = "Compendium.hashira-handbook-compendium.itens.Item.RTUJzlbLcKZIkaeD";
    CONFIG.DND5E.weaponIds.chakram = "Compendium.hashira-handbook-compendium.itens.Item.Orx9KuenEtwzQKJE";
    CONFIG.DND5E.weaponIds.odachi = "Compendium.hashira-handbook-compendium.itens.Item.u0I6Js3jGiq0kNyY";
    CONFIG.DND5E.weaponIds.kunai = "Compendium.hashira-handbook-compendium.itens.Item.51Y6uB80PoDt6Q9A";
    CONFIG.DND5E.weaponIds.kusanagi = "Compendium.hashira-handbook-compendium.itens.Item.MRVOb8cYvfLuZCIZ";
    CONFIG.DND5E.weaponIds.kusarigama = "Compendium.hashira-handbook-compendium.itens.Item.Py7NzjrRjyifZLRn";
    CONFIG.DND5E.weaponIds.heavykusarigama = "Compendium.hashira-handbook-compendium.itens.Item.ohAq1sKddupi6eSD";
    CONFIG.DND5E.weaponIds.yumi = "Compendium.hashira-handbook-compendium.itens.Item.FTJ83CVqjoRR1qIM";
    CONFIG.DND5E.weaponIds.senbon = "Compendium.hashira-handbook-compendium.itens.Item.aDNN7pLxdArhvgg2";
    CONFIG.DND5E.weaponIds.shanken = "Compendium.hashira-handbook-compendium.itens.Item.0Zfl1mhCNbCt1Amp";
    CONFIG.DND5E.weaponIds.tachi = "Compendium.hashira-handbook-compendium.itens.Item.8ukkzK7eCsIbzir9";
    CONFIG.DND5E.weaponIds.shuriken = "Compendium.hashira-handbook-compendium.itens.Item.EPQjsG8SDtF7AF1x";
    CONFIG.DND5E.weaponIds.tessen = "Compendium.hashira-handbook-compendium.itens.Item.hrQhUMmxf9xvhV0j";
    CONFIG.DND5E.weaponIds.wakizashi = "Compendium.hashira-handbook-compendium.itens.Item.5tpMJE2fIbnFadvn";

    //Armas de Fogo Id
    CONFIG.DND5E.weaponIds.baioneta = "Compendium.hashira-handbook-compendium.itens.Item.uS7aRcwjVtncnWpm";
    CONFIG.DND5E.weaponIds.espingardadedoiscanos = "Compendium.hashira-handbook-compendium.itens.Item.xuc4LTShiWUDiBVE";
    CONFIG.DND5E.weaponIds.espingardadoze = "Compendium.hashira-handbook-compendium.itens.Item.CI3o89b60kTsEkB7";
    CONFIG.DND5E.weaponIds.magnum = "Compendium.hashira-handbook-compendium.itens.Item.9hmRCnUMWj2bDfv6";
    CONFIG.DND5E.weaponIds.mosquete = "Compendium.hashira-handbook-compendium.itens.Item.BAfKctLzbU659cXm";
    CONFIG.DND5E.weaponIds.pistola = "Compendium.hashira-handbook-compendium.itens.Item.Et28B9CjO4v9kvL5";
    CONFIG.DND5E.weaponIds.pistoladedoiscanos = "Compendium.hashira-handbook-compendium.itens.Item.gpEFXX5ySkJLSZTI";
    CONFIG.DND5E.weaponIds.revolver = "Compendium.hashira-handbook-compendium.itens.Item.fXQ4iJd8gnxmT4Y0";
    CONFIG.DND5E.weaponIds.rifle = "Compendium.hashira-handbook-compendium.itens.Item.khOsbpX31KK3Fgxf";
    
    //Munições
    CONFIG.DND5E.consumableTypes.ammo.subtypes.bombamao = "Bomba de Mão";
    CONFIG.DND5E.consumableTypes.pe = {
      label:"Pontos de Energia"
    }
    CONFIG.DND5E.consumableTypes.patentes = {
      label:"Patentes",
      subtypes:{
        0:"Mizunoto",
        1:"Mizunoe",
        2:"Kanoto",
        3:"Kanoe",
        4:"Tsuchinoto",
        5:"Tsuchinoe",
        6:"Hinoto",
        7:"Hinoe",
        8:"Kinoto",
        9:"Kinoe",
        10:"Hashira"
      }
    }


    //Propriedades das Armas
    CONFIG.DND5E.itemProperties.decepadora = {
      label: "Decepadora",
      isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("decepadora");
    
    CONFIG.DND5E.itemProperties.tiroduplo = {
      label: "Tiro Duplo",
      isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("tiroduplo");

    //Propriedades
    CONFIG.DND5E.itemProperties.combinavel = {
      label: "Combinável",
    };
    CONFIG.DND5E.validProperties.consumable.add("combinavel");
    
    //Tipo de Dano
    CONFIG.DND5E.damageTypes.primordial = {
      label: "Primordial",
      icon: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1035874524W10000H9085/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/tanjiro-scar-sticker.jpg",
      color: new Color(0xcd2c1e),
      isPhysical: false
    };

    // Modificações (encantamentos)
    CONFIG.DND5E.featureTypes.enchantment.subtypes.modSmith = "Armamento Personalizado";
    CONFIG.DND5E.featureTypes.enchantment.subtypes.modMelee = "Alteração de Arma Corpo-a-Corpo";
    CONFIG.DND5E.featureTypes.enchantment.subtypes.modRange = "Alteração de Arma à Distância";
    CONFIG.DND5E.featureTypes.enchantment.subtypes.nichirin = "Nichirin";


    //Dinheiro
    delete CONFIG.DND5E.currencies.pp
    delete CONFIG.DND5E.currencies.gp
    delete CONFIG.DND5E.currencies.ep
    delete CONFIG.DND5E.currencies.sp
    delete CONFIG.DND5E.currencies.cp
    CONFIG.DND5E.currencies.iene = {
      label: "Iene",
      abbreviation: "¥",
      conversion: 1
    }

    //peso
    CONFIG.DND5E.encumbrance.currencyPerWeight.metric = 100000000000000000000000000;
    CONFIG.DND5E.encumbrance.currencyPerWeight.imperial = 100000000000000000000000000;
    
    CONFIG.DND5E.encumbrance.threshold.maximum.metric =  7.5;
    CONFIG.DND5E.encumbrance.threshold.heavilyEncumbered.metric = 5;


    //escolas de magia
    CONFIG.DND5E.spellSchools.resp = {
      label: "Técnica de Respiração",
      icon: "icons/skills/melee/maneuver-sword-katana-yellow.webp",
      fullkey:"respiracao",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.bh3bNXTLm09YKRMT.JournalEntryPage.SzqbxHpRaGnhwHeh"
    } 
    CONFIG.DND5E.spellSchools.kekkijutsu = {
      label: "Kekkijutsu de Classe",
      icon: "icons/magic/symbols/rune-sigil-hook-white-red.webp",
      fullkey:"kekkijutsu",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.aDUBE0I3agLToN5W.JournalEntryPage.D8D6ZB8hNu8t7gZl"
    }
    CONFIG.DND5E.spellSchools.hinokami = {
      label: "Hinokami Kagura",
      icon: "icons/magic/fire/barrier-wall-flame-ring-yellow.webp",
      fullkey:"HinokamiKagura",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.bh3bNXTLm09YKRMT.JournalEntryPage.bcDFA4w500zslyRi"
    } 
    CONFIG.DND5E.spellSchools.kekkijutsuSol = {
      label: "Kekkijutsu do Sol",
      icon: "icons/magic/lightning/bolt-strike-explosion-yellow.webp",
      fullkey:"kekkijutsuSol",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.aDUBE0I3agLToN5W.JournalEntryPage.gQ7H5KDDiM5jKxju"
    }
    CONFIG.DND5E.spellSchools.concentracao = {
      label: "Concentração Total",
      icon: "icons/skills/melee/maneuver-greatsword-yellow.webp",
      fullkey:"concentracaoTotal",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.aDUBE0I3agLToN5W.JournalEntryPage.gQ7H5KDDiM5jKxju"
    }
    CONFIG.DND5E.spellSchools.kekkijutsuElemental = {
      label: "Kekkijutsu Elemental",
      icon: "icons/magic/symbols/elements-air-earth-fire-water.webp",
      fullkey:"kekkijutsuElemental",
      reference: "Compendium.hashira-handbook-compendium.livro.JournalEntry.aDUBE0I3agLToN5W.JournalEntryPage.D8D6ZB8hNu8t7gZl"
    }
    delete CONFIG.DND5E.spellSchools.abj;
    delete CONFIG.DND5E.spellSchools.con;
    delete CONFIG.DND5E.spellSchools.div;
    delete CONFIG.DND5E.spellSchools.enc;
    delete CONFIG.DND5E.spellSchools.evo;
    delete CONFIG.DND5E.spellSchools.ill;
    delete CONFIG.DND5E.spellSchools.nec;
    delete CONFIG.DND5E.spellSchools.trs;

  CONFIG.DND5E.spellcastingTypes.resp = {    label: 'Respirações' };
  CONFIG.DND5E.spellProgression.resp = 'Respirações';
  CONFIG.DND5E.spellPreparationModes.resp = {
    label: 'Respirações',
    upcast: true,
    order: 0.75,
  };
  CONFIG.DND5E.respCastingProgression = {
    1: { slots: 1, level: 1 },
    2: { slots: 2, level: 1 },
    3: { slots: 3, level: 1 },
    4: { slots: 4, level: 1 },
    5: { slots: 5, level: 1 },
    6: { slots: 6, level: 1 },
    7: { slots: 7, level: 2},
    8: { slots: 8, level: 2 },
    9: { slots: 9, level: 2 },
    10: { slots: 10, level: 3 },
    11: { slots: 11, level: 3 },
    12: { slots: 12, level: 3 },
    13: { slots: 13, level: 4 },
    14: { slots: 14, level: 4 },
    15: { slots: 15, level: 4 },
    16: { slots: 16, level: 4 },
    17: { slots: 17, level: 4 },
    18: { slots: 18, level: 4 },
    19: { slots: 19, level: 4 },
    20: { slots: 20, level: 4 },
  };
    Hooks.on(`dnd5e.computeRespProgression`, computeRespProgression);
    Hooks.on(`dnd5e.prepareRespSlots`, prepareRespSlots);

    CONFIG.DND5E.spellcastingTypes.eternalCrusader = {
      label: 'Respiração do Inseto',
      img: 'icons/consumables/potions/bottle-round-corked-orante-red.webp',
      shortRest: true,
    };
    CONFIG.DND5E.spellProgression.eternalCrusader = 'Respiração do Inseto';
    CONFIG.DND5E.spellPreparationModes.eternalCrusader = {
      label: 'Respiração do Inseto',
      upcast: true,
      order: 0.75,
    };
    Hooks.on('dnd5e.computeEternalCrusaderProgression', computeProgression);
    Hooks.on('dnd5e.prepareEternalCrusaderSlots', prepareSlots);
  });
  function computeRespProgression(progression, actor, cls, spellcasting, count) {
    progression.resp ??= 0;
    progression.resp += spellcasting.levels;
  }
  
  function prepareRespSlots(spells, actor, progression) {
    const table = {
      1: { slots: 1, level: 1 },
      2: { slots: 2, level: 1 },
      3: { slots: 3, level: 1 },
      4: { slots: 4, level: 1 },
      5: { slots: 5, level: 1 },
      6: { slots: 6, level: 1 },
      7: { slots: 7, level: 2},
      8: { slots: 8, level: 2 },
      9: { slots: 9, level: 2 },
      10: { slots: 10, level: 3 },
      11: { slots: 11, level: 3 },
      12: { slots: 12, level: 3 },
      13: { slots: 13, level: 4 },
      14: { slots: 14, level: 4 },
      15: { slots: 15, level: 4 },
      16: { slots: 16, level: 4 },
      17: { slots: 17, level: 4 },
      18: { slots: 18, level: 4 },
      19: { slots: 19, level: 4 },
      20: { slots: 20, level: 4 },
    };
  
    CONFIG.Actor.documentClass.prepareAltSlots(spells, actor, progression, 'resp', table);
    
  }

  function computeProgression(progression, actor, cls, spellcasting, count) {
    progression.eternalCrusader ??= 0;
    progression.eternalCrusader += spellcasting.levels;
  }
  
  function prepareSlots(spells, actor, progression) {
    const table = {
      1: { slots: 1, level: 1 },
      3: { slots: 2, level: 1 },
      5: { slots: 3, level: 1 },
      7: { slots: 4, level: 2 },
      9: { slots: 5, level: 2 },
      10: { slots: 5, level: 3 },
      11: { slots: 6, level: 3 },
      13: { slots: 7, level: 4 },
      15: { slots: 8, level: 4 },
      17: { slots: 9, level: 4 },
      19: { slots: 10, level: 4 },
    };
  
    CONFIG.Actor.documentClass.prepareAltSlots(spells, actor, progression, 'eternalCrusader', table);
  }
