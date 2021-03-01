
import React, { Component } from 'react';
import api_categoria from './api_categoria';


class Tabela_Categoria extends Component {

  state = {
    categorias: [],
  }

  async componentDidMount() {
    await api_categoria.get().then(response =>{
        console.log(response.data);
        this.setState({ categorias: response.data });
    });
  }

  render() {

    const { categorias } = this.state;

    return (
      <div>
        <h1>Categorias</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Nome
                        </th>
                    </tr>
                </thead>
                <tbody>
                {categorias.map(categorias => (
                    <tr>
                        <td>
                            {categorias.id}
                        </td>
                        <td>
                            {categorias.nome_categoria}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

      </div>
    );
  };
};

export default Tabela_Categoria;