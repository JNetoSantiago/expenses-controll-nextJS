import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-12">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl w-full mb-12">
        <p className="text-3xl text-slate-900">Despesas</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cadastrar Despesa</button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Position
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">
                          React Developer
                      </td>
                      <td className="px-6 py-4">
                          React Developer
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Pago
                          </div>
                      </td>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                      </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4">
                          React Developer
                      </td>
                      <td className="px-6 py-4">
                          SEO Specialist
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Não Pago
                          </div>
                      </td>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </main>
  );
}
