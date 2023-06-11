function groupAnagrams(strs: string[]): string[][] {

    const grouped = {} // Criação do objeto para armazenar os grupos de anagramas
    
    strs.forEach((string) => { // Iteração sobre cada string do array strs (O(n))
        const key = string.split("").sort().join(""); // Geração da chave do anagrama através da ordenação dos caracteres (O(n log n))
        if (!grouped[key]) { // Verifica se a chave ainda não existe no objeto grouped ())
            grouped[key] = []; // Cria um novo array vazio para a chave no objeto grouped ())
        }
        grouped[key].push(string); // Adiciona a string ao array correspondente à chave no objeto grouped ())
    })

    return Object.values(grouped); // Retorna um array com os valores do objeto grouped, que são os grupos de anagramas (O(n))
};


// O(n log n)