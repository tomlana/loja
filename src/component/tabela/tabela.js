
import React, { Component } from 'react';
import api from './api';


class Tabela extends Component {

  state = {
    produtos: [],
  }

  async componentDidMount() {
    await api.get().then(response =>{
        console.log(response.data);
        this.setState({ produtos: response.data });
    });
  }

  render() {

    const { produtos } = this.state;

    return (
      <div>
        <h1>Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Estoque
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Marca
                        </th>
                        <th>
                            Categoria
                        </th>
                    </tr>
                </thead>
                <tbody>
                {produtos.map(produtos => (
                    <tr>
                        <td>
                            {produtos.nome_produto}
                        </td>
                        <td>
                            {produtos.estoque}
                        </td>
                        <td>
                            {produtos.preco}
                        </td>
                        <td>
                            {produtos.cod_marca}
                        </td>
                        <td>
                            {produtos.cod_cat}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

      </div>
    );
  };
};

export default Tabela;