document.getElementById("anagramForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const texto1 = document.getElementById("texto1").value.trim().toLowerCase();
    const texto2 = document.getElementById("texto2").value.trim().toLowerCase();
    const resultado = document.getElementById("result");

    function saoAnagramas(str1, str2) {
        if (str1.length !== str2.length) return false;
        return str1.split("").sort().join("") === str2.split("").sort().join("");
    }

    if (saoAnagramas(texto1, texto2)) {
        resultado.textContent = "✅ São anagramas!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Não são anagramas.";
        resultado.style.color = "red";
    }
});