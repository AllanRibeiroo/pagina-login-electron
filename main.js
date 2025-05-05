// Importando os modulos app e browserwindow do electron
const { app, BrowserWindow } = require('electron')

// Defina a função createwindow que é responsavel cria uma janela do aplicativo Electron

const createWindow = () => {
    // cria uma instancia do browserwindow com as dimensões especificas 
  const win = new BrowserWindow({
    width: 800, // Define a largura da janela
    height: 600 // Define a altura da janela 
  })

  // Carrega o arquivo index.html na janela criada 
  win.loadFile('index.html')
}

// Quando o aplicativo estiver pronto, chama a funçao createwindow para criar a janela principal
app.whenReady().then(() => {

    // Executa a função createwindow para criar a janela principal 
  createWindow()
})