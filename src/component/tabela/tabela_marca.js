
import React, { Component } from 'react';
import api_marca from './api_marca';


class Tabela_Marca extends Component {

  state = {
    marcas: [],
  }

  async componentDidMount() {
    await api_marca.get().then(response =>{
        console.log(response.data);
        this.setState({ marcas: response.data });
    });
  }

  render() {

    const { marcas } = this.state;

    return (
      <div>
        <h1>Marcas</h1>
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
                {marcas.map(marcas => (
                    <tr>
                        <td>
                            {marcas.id}
                        </td>
                        <td>
                            {marcas.nome_marca}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

      </div>
    );
  };
};

export default Tabela_Marca;