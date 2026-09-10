import fs from 'fs';

async function verificarLog(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        console.log(texto);
        
        // Append de novo acesso
        await fs.promises.appendFile('log.txt', `\nNovo acesso registrado em: [${new Date().toISOString()}]`, 'utf-8');
    } catch (erro) {
        console.log('Arquivo log não existente!');
        await recriarLog();
    }
}

async function recriarLog() {
    const conteudo = `Novo acesso registrado em: [${new Date().toISOString()}]`;
    await fs.promises.writeFile('log.txt', conteudo, 'utf-8');
    console.log('Novo arquivo log criado com sucesso!');
}

verificarLog('./log.txt')