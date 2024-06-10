// 02a_funcaoComoParametro

function decision(question, doOK, doCancel) {
    if (question=="OK") doOK();
    else doCancel();
}

function showOK() {console.log("You agreed.");}

function showCancel() {console.log("You canceled the execution.");}

decision("OK", showOK, showCancel);
decision("Cancel", showOK, showCancel);