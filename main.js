async function Search() {
    const response = await fetch('/dani.json');
    let values = await response.json();
    let data = await values.planets;
    let planetDataUL = document.getElementById('planetDataUL');
    planetDataUL.textContent = '';
    let searchedText = document.getElementById('searchText');
    for (let p of data) {
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />Planet Name:  ' + p.name + '<br>Information:  ' + p.info;
        if (p.name.toLowerCase().includes(searchedText.value.toLowerCase())) {
            planetDataUL.appendChild(li);
        }
    }
}




document.addEventListener('DOMContentLoaded', () => {
    Search();
    document.getElementById('searchText').addEventListener('input', () => { Search() });
});