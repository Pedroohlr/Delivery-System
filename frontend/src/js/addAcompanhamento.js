import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

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

        const docRef = await addDoc(collection(db, "acompanhamentos"), {
            nome,
            preco: parseFloat(preco),
            imageUrl
        });

        // console.log(`Document written with ID: ${docRef.id}`);
        alert("Acompanhamento adicionado com sucesso!");
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro ao adicionar a bebida");
    }
});

