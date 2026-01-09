class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack(){
        if (this.tipo === 'guerreiro'){
            console.log(`o ${this.tipo} atacou usando espada`)

        }else if(this.tipo === 'mago'){
            console.log(`o ${this.tipo} atacou usando magia`)

        }else if(this.tipo === 'monge'){
            console.log(`o ${this.tipo} atacou usando artes marciais`)

        }else if(this.tipo === 'ninja'){
            console.log(`o ${this.tipo} atacou usando shuriken`)

        }else{
            console.log(`o ${this.tipo} atacou de forma basica`)
        }

    
    }
}

heroi1 = new hero('Arus', 15, 'guerreiro')
heroi2 = new hero('Jennica', 14, 'mago')
heroi3 = new hero('Wedge', 16, 'monge')
heroi4 = new hero('Topapa', 13, 'ninja')
heroi5 = new hero('Gandalf', 201, 'feiticeiro')

heroi1.attack()
console.log("--------------------")

heroi2.attack()
console.log("--------------------")

heroi3.attack()
console.log("--------------------")

heroi4.attack()
console.log("--------------------")

heroi5.attack()