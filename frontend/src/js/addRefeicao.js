import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: window.env.API_KEY,
    authDomain: window.env.authDomain,
    projectId: window.env.projectId,
    storageBucket: window.env.storageBucket,
    messagingSenderId: window.env.messagingSenderId,
    appId: window.env.appId
  };
// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const postForm = document.getElementById("postForm");
postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const preco = e.target.preco.value;
    const file = e.target.foto.files[0];

    // Adiciona logs para depuração
    console.log('Form data:', { nome, preco, file });

    try {
        let imageUrl = '';
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            imageUrl = await getDownloadURL(snapshot.ref);
        }

        const docRef = await addDoc(collection(db, "refeicoes"), {
            nome,
            preco: parseFloat(preco),
            imageUrl
        });

        console.log(`Document written with ID: ${docRef.id}`);
        alert("Refeição adicionada com sucesso!");
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro ao adicionar a refeição");
    }
});
