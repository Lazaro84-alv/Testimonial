import './App.css';
import Testimonio from "./components/Testimonio"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>O que dizem nossos alunos sobre a Kemetec:</h1>
        <Testimonio 
          nombre="Ciata Nagô"
          pais="Angola"
          imagen="ciata"
          cargo="Engenhera de Software"
          empresa="Cognizant"
          testimonio="Eu sempre tive problemas para aprender JavaScript. Eu fiz muitos cursos, mas o curso na Kemetec foi o que ficou. Estudar JavaScript, bem como estruturas de dados e algoritmos na Kemetec me deu as habilidades e a confiança que eu precisava para conseguir meu emprego dos sonhos como engenheiro de software no Cognizant."
        />
        <Testimonio 
          nombre="Dandara Ketu"
          pais="Benin"
          imagen="dandara"
          cargo="Analista de Desenvolvimento"
          empresa="Netflix"
          testimonio="É assustador mudar de carreira. Só ganhei a confiança de que poderia codificar trabalhando nas centenas de horas de aulas gratuitas no Kemetec. Dentro de um ano eu tinha um emprego de seis dígitos como engenheiro de software. Kemetec mudou minha vida."
        />
        <Testimonio 
          nombre="Elza Ijexá"
          pais="Benin"
          imagen="elza"
          cargo="Data Scientist"
          empresa="Amazon"
          testimonio="A Kemetec foi a porta de entrada para minha carreira como desenvolvedor de software. O currículo bem estruturado levou meu conhecimento de programação de um nível iniciante completo para um nível muito confiante. Era tudo o que eu precisava para conseguir meu primeiro emprego de desenvolvedor em uma empresa incrível."
        />
      </div>
    </div>
  );
}

export default App;
