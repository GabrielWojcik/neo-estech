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
        
        const anagramas = {
            texto1: texto1,
            texto2: texto2,
            resultado: "São anagramas!"
        };

        let anagramasSalvos = JSON.parse(localStorage.getItem("anagramas")) || [];

        anagramasSalvos.push(anagramas);

        localStorage.setItem("anagramas", JSON.stringify(anagramasSalvos));
        exibirAnagramas();


    } else {
        resultado.textContent = "❌ Não são anagramas.";
        resultado.style.color = "red";
    }

    function exibirAnagramas() {
        const anagramasContainer = document.getElementById("anagramas-container");
    
        // Limpa a div atual
        anagramasContainer.innerHTML = "";
    
        // Recupera os anagramas do localStorage
        let anagramasSalvos = JSON.parse(localStorage.getItem("anagramas")) || [];
    
        // Exibe cada anagrama na div
        anagramasSalvos.forEach(function(anagrama) {
            const div = document.createElement("div");
            div.classList.add("anagrama-item");
            div.textContent = `Texto 1: ${anagrama.texto1}, Texto 2: ${anagrama.texto2} - ${anagrama.resultado}`;
            anagramasContainer.appendChild(div);
        });
    }

    window.onload = exibirAnagramas;

});