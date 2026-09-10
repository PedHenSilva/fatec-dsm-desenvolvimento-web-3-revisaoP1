import fs from 'fs';

async function verificarCSV(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        await fs.promises.writeFile('export_relatorio.txt', texto, 'utf-8');
        criarRelatorio();

    } catch (erro) {
        console.log('Arquivo CSV não existente para leitura!');
    }
}

async function criarRelatorio() {
    // Append de novo acesso
    await fs.promises.appendFile('export_relatorio.txt', `\nRelatório Gerado para FATEC - [${new Date().toLocaleString()}]`, 'utf-8');
}

verificarCSV('./estudantes.csv')