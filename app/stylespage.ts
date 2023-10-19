import styled from 'styled-components';
import theme from './theme';


export const Container = styled.div`

`;

export const CardContent = styled.div`
.principalContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};  
}

.Cardsalign {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.campaign-card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  width: 40%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1); 
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.base {
  font-size: 20px;
	color: white;
  font-weight: bold;
}

h3 { 
  color: white;
}

p {
  color: white;
}

.campaign-card:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.campaign-card.clicked {
  background: rgba(255, 255, 255, 0.1); 
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
}

/* Estilo dos detalhes de campanha expandidos */
.campaign-percentages {
  display: none;
}

.campaign-card.clicked .campaign-percentages {
  display: block;
  margin-top: 10px;
}

.percentage-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconde o conteúdo que transborda */
  text-overflow: ellipsis; /* Mostra "..." para indicar que o texto foi cortado */
  white-space: nowrap; 
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}

h1 {
  margin-bottom: 3%;
}

.percentage-item h3 {
  font-size: 16px;
  margin: 5px 0;
}

.com-aviso {
  border: 2px solid red;
  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018; /* Efeito de sombra vermelha */}
}

/* Estilos para porcentagens */
.porcentagem-vermelha {
  color: red;
  font-weight: bold;
}

.porcentagem-verde {
  color: green;
  font-weight: bold;
}

nav {
  display: flex;
  justify-content: center;
    width: 100%;
}

.nav-links{
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  background: #fff;
  padding: 20px 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  margin-top: 3%;
  margin-bottom: 3%;
}

.nav-links:hover {
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.nav-links li{
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: black;
  font-size: 25px;
  font-family:'open_sansregular';  
  font-weight: bold;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: red;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}

.logo {
  display: flex;
  max-height: 150px;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
}


`