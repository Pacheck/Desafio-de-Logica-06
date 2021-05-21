const me = {
    name: 'Pedro',
    height: 1.8,
    hobbies: ['play games', 'listen to music', 'study'],
}

me.favoriteLanguage = 'Javascript';

delete me.height;

console.log(me);

const createUser = (nome, idade, telefone, amigos) => ({ nome, idade, telefone, amigos })

const cadastro = [
    createUser('Pedro', 24, 21966969232, ['John', 'Doe', 'João', 'Thor']),
    createUser('Rafael', 17, 3492341423, ['Rita', 'Goulart', 'Cleber', 'Rodolfo']),
    createUser('José', 35, 1978372613, ['Carlos', 'Amanda', 'Miguel', 'Zenitsu']),
    createUser('Patrícia', 27, 2423149831, ['Mariana', 'Carla', 'Natália', 'Jorge']),
    createUser('Zeus', 3000, null, ['Poseidon', 'Zeus', 'Afrodite', 'Hades'])
];

console.log(cadastro);

cadastro.forEach(user => console.log(`${user.nome} é amigo de ${user.amigos[Math.floor(Math.random() * 4)]}`));
//Mostrar um amigo aleatório de cada lista