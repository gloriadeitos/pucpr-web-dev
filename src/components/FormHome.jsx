import React from 'react'

export default function FormHome({ nome, sobrenome, dataNascimento, logado, mensagem }){
  return (
    <div className="h-full bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-2xl w-80">
        <h1 className="text-xl font-bold text-center text-gray-100 mb-4">Dados do usuário</h1>

        <div className="mb-2.5">
          <label className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
          <input
            type="text"
            value={nome}
            readOnly
            className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          />
        </div>

        <div className="mb-2.5">
          <label className="block text-gray-300 text-sm font-bold mb-2">Sobrenome</label>
          <input
            type="text"
            value={sobrenome}
            readOnly
            className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-300 text-sm font-bold mb-2">Data de Nascimento</label>
          <input
            type="text"
            value={dataNascimento}
            readOnly
            className="w-full px-3 py-1.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          />
        </div>

        {!logado && (
          <div className="mt-4 p-3 rounded-md text-center bg-yellow-900/40 text-yellow-200">
            Login não foi feito
          </div>
        )}

        {mensagem && (
          <div className="mt-3 p-3 rounded-md text-center bg-red-900/40 text-red-300">
            {mensagem}
          </div>
        )}
      </div>
    </div>
  )
}
