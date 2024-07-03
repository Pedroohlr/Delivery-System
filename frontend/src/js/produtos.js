import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDsQ1RgkFXYBDeOzgzEMoRZ9myy4USd5do",
    authDomain: "lanches-e2650.firebaseapp.com",
    projectId: "lanches-e2650",
    storageBucket: "lanches-e2650.appspot.com",
    messagingSenderId: "930244230910",
    appId: "1:930244230910:web:f9dc3b2aa96f5d55f06faf"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function deletarRefeicao(id){
    try {
        if(confirm("Deseja deletar esse produto?") === true){
            await deleteDoc(doc(db, "refeicoes", id));
            console.log(`Produto deletado com ID: ${id}`);
            getRefeicoes(); // Atualiza a lista de refeições após deletar
        } else {
            return 0;
        }
    } catch (error) {
        console.error(`Erro ao deletar o produto ${id}: `, error);
    }
}

async function deletarBebidas(id){
    try {
        if(confirm("Deseja deletar esse produto?") === true){
            await deleteDoc(doc(db, "bebidas", id));
            console.log(`Produto deletado com ID: ${id}`);
            getBebidas(); // Atualiza a lista de refeições após deletar
        } else {
            return 0;
        }
    } catch (error) {
        console.error(`Erro ao deletar o produto ${id}: `, error);
    }
}

async function deletarAcompanhamentos(id){
    try {
        if(confirm("Deseja deletar esse produto?") === true){
            await deleteDoc(doc(db, "acompanhamentos", id));
            console.log(`Produto deletado com ID: ${id}`);
            getAcompanhamentos(); // Atualiza a lista de refeições após deletar
        } else {
            return 0;
        }
    } catch (error) {
        console.error(`Erro ao deletar o produto ${id}: `, error);
    }
}

async function getRefeicoes() {
    const refeicoesRef = collection(db, 'refeicoes');
    try {
        const snapshot = await getDocs(refeicoesRef);
        const dataContainer = document.querySelector('.refeicao');
        dataContainer.innerHTML = ''; // Limpa o container antes de adicionar novos dados
        snapshot.forEach(doc => {
            const data = doc.data();
            const id = doc.id;
            const item = document.createElement('div');
            item.innerHTML = `
                <div class="prod">
                    <img class="imgUrl" src="${data.imageUrl}" alt="${data.nome}">
                    <p><strong>${data.nome}</strong></p>
                    <p><strong>R$${(data.preco).toFixed(2)}</strong></p>
                    <button class="dellProduto">Deletar produto</button>
                </div>
            `;
            item.querySelector('.dellProduto').addEventListener('click', () => deletarRefeicao(id));
            dataContainer.appendChild(item);
        });
    } catch (error) {
        console.error("Erro ao puxar dados: ", error);
    }
}

document.addEventListener("DOMContentLoaded", getRefeicoes);

async function getBebidas() {
    const refeicoesRef = collection(db, 'bebidas');
    try {
      const snapshot = await getDocs(refeicoesRef);
      const dataContainer = document.querySelector('.bebidas');
      dataContainer.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const id = doc.id;
        const item = document.createElement('div');
        item.innerHTML = `
        <div class="prod">
            <img class="imgUrl" src="${data.imageUrl}" alt="${data.nome}">
            <p><strong>${data.nome}</strong></p>
            <p><strong>R$${(data.preco).toFixed(2)}</strong></p>
            <p></p>
            <button class="dellProduto">Deletar produto</button>
        </div>
        `;
        item.querySelector('.dellProduto').addEventListener('click', () => deletarBebidas(id));
        dataContainer.appendChild(item);
      });
    } catch (error) {
      console.error("Erro ao puxar dados: ", error);
    }
  }

getBebidas();

async function getAcompanhamentos() {
    const refeicoesRef = collection(db, 'acompanhamentos');
    try {
      const snapshot = await getDocs(refeicoesRef);
      const dataContainer = document.querySelector('.acompanhamentos');
      dataContainer.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const id = doc.id;
        const item = document.createElement('div');
        item.innerHTML = `
        <div class="prod">
            <img class="imgUrl" src="${data.imageUrl}" alt="${data.nome}">
            <p><strong>${data.nome}</strong></p>
            <p><strong>R$${(data.preco).toFixed(2)}</strong></p>
            <button class="dellProduto">Deletar produto</button>
        </div>     
        `;
        item.querySelector('.dellProduto').addEventListener('click', () => deletarAcompanhamentos(id));
        dataContainer.appendChild(item);
      });
    } catch (error) {
      console.error("Erro ao puxar dados: ", error);
    }
  }

getAcompanhamentos();