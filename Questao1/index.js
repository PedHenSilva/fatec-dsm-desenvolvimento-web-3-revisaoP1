import fs from 'fs';

// Carregar/Ler JSON
async function carregar() {
    try {
        const conteudo = await fs.promises.readFile('./config.json', 'utf-8');
        const data = JSON.parse(conteudo);
        
        console.log(`Configuração carregada para o curso ${data.curso} no campus ${data.campus}.`);
    } catch (err) {
        console.log('Falha em carregar arquivo');
    }
}

carregar();