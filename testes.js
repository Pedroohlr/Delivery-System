const users = [
    {
        userId: 4414,
        nome: 'Pedro Henrique Hilario',
        endereco: 'joao faria 425'
    },
    {
        userId: 4418,
        nome: 'Joao Claudio',
        endereco: 'Jose Pedro Borges 887'
    },
    {
        userId: 4416,
        nome: 'Cecilia',
        endereco: 'Padre Arthur Samuel 332'
    }
]
function consultarCliente(id) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (id != user.userId) {
                console.log('O id é diferente');
            } else {
                console.log(user);
                let resto = id % 2;
                if (resto === 1) {
                    reject("o ID fornecido é impar");
                } else {
                    resolve(`Sucesso ao logar, as inforamções do usuario: `);
                }
            }
        }
    });
}
consultarCliente(4414).then((msgSucess) => {
    console.log(msgSucess)
}).catch((msgErr) => {
    console.log(msgErr)
});

























