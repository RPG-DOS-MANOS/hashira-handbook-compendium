Hooks.once("init", () => {
    CONFIG.DND5E.weaponTypes.unico = "Armas Únicas";
    CONFIG.DND5E.weaponProficiencies.unico = "Armas Únicas";
    CONFIG.DND5E.weaponProficienciesMap.unicoR = "unico";
    CONFIG.DND5E.weaponProficienciesMap.unicoM = "unico";

    CONFIG.DND5E.weaponTypes.pesado = "Armas Pesadas";
    CONFIG.DND5E.weaponProficiencies.pesado = "Armas Pesadas";
    CONFIG.DND5E.weaponProficienciesMap.pesadoR = "pesado";
    CONFIG.DND5E.weaponProficienciesMap.pesadoM = "pesado";

    CONFIG.DND5E.weaponTypes.fogo = "Armas de Fogo";
    CONFIG.DND5E.weaponProficiencies.fogo = "Armas de Fogo";
    CONFIG.DND5E.weaponProficienciesMap.fogoR = "fogo";

    

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


    //Propriedades das Armas
    CONFIG.DND5E.itemProperties.decepadora = {
      label: "Decepadora",
      isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("decepadora");
    //Tipo de Dano
    CONFIG.DND5E.damageTypes.primordial = {
      label: "Primordial",
      isPhysical: false
    };
    // etc etc
  });