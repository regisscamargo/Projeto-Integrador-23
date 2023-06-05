function OpenPython(BtnDropdown01) {
    document.getElementById('ConteudosPrincipais').style.display = 'none'
    document.getElementById('ConteudoPython').style.display = 'flex'
    CtrlMenu(BtnDropdown01)
}

function CtrlMenu(BtnDropdown01) {
    let MenuDropdownContent01 = document.getElementById('MenuDropdownContent01');
    BtnDropdown01.classList.toggle("ActiveBtn");
    MenuDropdownContent01.classList.toggle("MenuDropdownContentShow");
}