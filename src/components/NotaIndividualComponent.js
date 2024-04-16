import notas from "../notas.json";

function NotaIndividual() {
  return (
    <div>
      <h1>{notas.title}</h1>
      <h1>{notas.content}</h1>
      <h1>{notas.category}</h1>
    </div>
  );
}

export default NotaIndividual;
