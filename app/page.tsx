import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Listagem de Gastos com possibilidade de filtrar o mês</p>
      <p>Mostrar cards com: Total em caixa inicial, Total em caixa atual (Entradas - Saidas), Previsão dos gastos,Saldo de gastos (Soma das Saidas)</p>
    </main>
  );
}
