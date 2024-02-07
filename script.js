class Tarefa {
    constructor(titulo, descricao) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.concluida = false;
    }
  
    concluir() {
      this.concluida = true;
    }
  
    toString() {
      return `${this.titulo} - ${this.descricao} - ${this.concluida ? 'Concluída' : 'Pendente'}`;
    }
  }
  
  class GerenciadorTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {

      this.tarefas.push(tarefa);
    }

    removerTarefa(indice,qt){
       this.tarefas.splice(indice,qt) 
    }
  
    marcarComoConcluida(indice) {
        const indiceReal = indice - 1;
        if (indiceReal >= 0 && indiceReal < this.tarefas.length) {
          this.tarefas[indiceReal].concluir();
        } else {
          console.log("Índice inválido!");
        }
      }
      
  
    listarTarefas() {
        console.log("Lista de Tarefas:");
        let contador = 1;
        this.tarefas.forEach(tarefa => {
          console.log(`${contador}. ${tarefa.toString()}`);
          contador++;
        });
    }

    filtrarTarefas(filtro) {
        return this.tarefas.filter(filtro);
    }

    contadorDeTarefas() {
        let contadorTrue = 0;
        let contadorFalse = 0;
    
        this.tarefas.forEach(tarefa => {
            if (tarefa.concluida) {
                contadorTrue++;
            } else {
                contadorFalse++;
            }
        });

        console.log(`Tarefas concluídas: ${contadorTrue}`);
        console.log(`Tarefas pendentes: ${contadorFalse}`);

    }

    editarTarefa(indice, novoTitulo, novaDescricao) {
        if (indice >= 0 && indice < this.tarefas.length) {
          const tarefa = this.tarefas[indice];
          tarefa.titulo = novoTitulo;
          tarefa.descricao = novaDescricao;
        } else {
          console.log("Índice inválido!");
        }
    }
    

    
      
      
}
  
  //CRIANDO O GERENCIADOR DE TAREFAS
  const gerenciador = new GerenciadorTarefas();
  

  //CRIANDO TAREFAS PARA O MEU GERENCIADOR
  gerenciador.adicionarTarefa(new Tarefa("Estudar JavaScript", "Estudar os conceitos básicos de JavaScript"));
  gerenciador.adicionarTarefa(new Tarefa("Fazer exercícios", "Resolver exercícios de JavaScript"));
  gerenciador.adicionarTarefa(new Tarefa("Praticar programação", "Praticar a escrita de código JavaScript"));

  //MARCANDO A TAREFA COMO CONCLUIDA
  gerenciador.marcarComoConcluida(1); // Marca a segunda tarefa como concluída
  
  //CONTADOR DE TAREFAS
  gerenciador.contadorDeTarefas()

  //LISTANDO AS TAREFAS 
  gerenciador.listarTarefas();

  //FILTRANDO AS TAREFAS CONCLUIDAS
  const tarefasConcluidas = gerenciador.filtrarTarefas(tarefa => tarefa.concluida);
  console.log("Tarefas concluídas:");
  tarefasConcluidas.forEach(tarefa => console.log(tarefa.toString()));

  gerenciador.editarTarefa(0,'Novo nome da tarefa', 'Nova descrição da tarefa')



  gerenciador.listarTarefas()
  