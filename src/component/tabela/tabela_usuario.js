
import React, { Component } from 'react';
import api_usuario from './api_usuario';


class Tabela_Usuario extends Component {

  state = {
    usuarios: [],
  }

  async componentDidMount() {
    await api_usuario.get().then(response =>{
        console.log(response.data);
        this.setState({ usuarios: response.data });
    });
  }

  render() {

    const { usuarios } = this.state;

    return (
      <div>
        <h1>Usuários</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Perfil
                        </th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map(usuarios => (
                    <tr>
                        <td>
                            {usuarios.nome}
                        </td>
                        <td>
                            {usuarios.email}
                        </td>
                        <td>
                            {usuarios.perfil}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

      </div>
    );
  };
};

export default Tabela_Usuario;