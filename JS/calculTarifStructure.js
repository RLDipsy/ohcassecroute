const calculTarifStructure = {
    init: function () {
        const buttonNbModule = document.querySelector('#nb-module');
        buttonNbModule.addEventListener('change', this.initLargLong);
    },
    initLargLong: function (evt) {
        const tabModule1 = [3200, 3600, 4000];
        const tabModule2 = [4000, 5000, 6000];
        const value = evt.target.value;
        console.log(value);
        if (value == 1) {
            calculTarifStructure.addOptions(tabModule1);
        }
        else {
            calculTarifStructure.addOptions(tabModule2);
        }
    },
    removeOptions: function(select) {
        const length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
    },
    addOptions: function (tabModule) {
        console.log(tabModule);
        const select = document.querySelector('#largeur-module');

        calculTarifStructure.removeOptions(select);

        for (const element of tabModule) {
            const opt = document.createElement('option');
            opt.value = element;
            opt.textContent = element;
            select.append(opt);
        }
    }
};