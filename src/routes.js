import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Categorias from './component/categorias/Categorias';
import Produtos from './component/produtos/Produtos';
import Marca from './component/marca/Marca';
import Login from './component/containers/Login';
import Usuario from './component/usuario/Usuario';



function Route(){
    return(

        <BrowserRouter>
        <Switch>
            <Route>
                <Route path="/marca" exact component={Marca} />
            </Route>
            <Route> 
                <Route path="/categorias" exact component={Categorias} />
            </Route>
            <Route> 
                <Route path="/produtos" exact component={Produtos} />
            </Route>
            <Route>
                <Route path="/login" exact component={Login} /> 
            </Route>
            <Route>
                <Route path="/usuario" exact component={Usuario} /> 
            </Route>
        </Switch>
        </BrowserRouter>
    )

}

export default Route;