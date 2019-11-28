// https://blog.rocketseat.com.br/reactjs-autenticacao/
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import { Container, Header } from "./styles";

class Home extends Component {

    handleLogout = e => {
        e.preventDefault();
        logout();              
        this.props.history.push("/");        
      };

  render() {
    return (
        <Container>
          <Header>

               <nav class="vMenu">          
                <ul>
                    <li><a href="">Início</a></li>
                    
                </ul>

            </nav>

            <button class="btMenu bgGradient" onClick={this.handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i></button>
              
          </Header>  
          <center><h1>Home</h1></center>
          {/* <button type="submit" onClick={this.handleLogout}>Sair</button> */}
      
        </Container>
    );
  }
}

export default withRouter(Home);