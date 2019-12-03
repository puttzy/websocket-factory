function isCreateValid() {
    setErrorState(id("addFactory_Min"), false);
    setErrorState(id("addFactory_Max"), false);
    setErrorState(id("addFactory_Name"), false);

    var min = id("addFactory_Min").value.trim();
    var max = id("addFactory_Max").value.trim();
    var name = id("addFactory_Name").value.trim();

    id("addFactory_Name").value = name.trim();
    var errMsg = '';
    var areInputsValid = true;

    if (name === ""){
        errMsg += 'Factory Name is required.';
        areInputsValid = false;
        setErrorState(id("addFactory_Name"), true);
    }

    if (! isInt(min)) {
        errMsg += '\nMinimum range must be an INT less than max range.';
        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
    }

    if (! isInt(max)) {
        errMsg += '\nMaximum range must be an INT greater than min range.';
        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
    }

    if (max <= min) {
        errMsg += '\nMinimum range must be less than maximum range.';

        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
        setErrorState(id("addFactory_Max"), true);
    }

    if (!areInputsValid){
        alert(errMsg);
    }
    return areInputsValid;
}


function createFactoryRequest() {

    if (isCreateValid()) {

        this.name = html_encode(id("addFactory_Name").value);
        this.number = id("addFactory_Nodes").value;
        this.min = id("addFactory_Min").value;
        this.max = id("addFactory_Max").value;

        id("addFactory_Name").value = '';
        id("addFactory_Nodes").value = '';
        id("addFactory_Min").value = '';
        id("addFactory_Max").value = '';
    } else {
        throw "Invalid input";
    }
}





