import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/interface/filme';
import $ from "jquery";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  filmes: Filme[] = [
    {"id": "1", "nome": "Velozes e Furiosos 9", "ano": "2021", "diretor": "Justin Lin", "genero": "Ação/Aventura", "descricao": "O longa vem dando continuidade às corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.", "poster": "./assets/imagens/velozes-furiosos-9.jpg"},
    {"id": "2", "nome": "Sniper Americano", "ano": "2014", "diretor": "Clint Eastwood", "genero": "Guerra/Ação", "descricao": "História real de Chris Kyle, atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a guerra do Iraque, sua missão era uma só- proteger seus companheiros. Seu dever fez dele um dos maiores atiradores da história americana.", "poster": "./assets/imagens/sniper-americano.jpeg"},
    {"id": "3", "nome": "Vingadores Ultimato", "ano": "2019", "diretor": "Joe Russo, Anthony Russo", "genero": "Ação/Ficção científica", "descricao": "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.", "poster": "./assets/imagens/vingadores-ultimato.jpg"},
    {"id": "4", "nome": "Homem-Aranha: Longe de Casa", "ano": "2019", "diretor": "Jon Watts", "genero": "Ação/Aventura", "descricao": "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.", "poster": "./assets/imagens/homem-aranha.jpg"},
    {"id": "5", "nome": "Interestelar", "ano": "2014", "diretor": "Christopher Nolan", "genero": "Ficção científica/Aventura", "descricao": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.", "poster": "./assets/imagens/interestrelar.jpg"},
    {"id": "6", "nome": "O Lobo de Wall Street", "ano": "2013", "diretor": "Martin Scorsese", "genero": "Comédia/Ficção policial ", "descricao": "Jordan Belfort é um ambicioso corretor da bolsa de valores que cria um verdadeiro império, enriquecendo de forma rápida, porém ilegal. Ele e seus amigos mergulham em um mundo de excessos, mas seus métodos ilícitos despertam a atenção da polícia.", "poster": "./assets/imagens/lobo-wall-street.jpg"}
]

  constructor() { }

  ngOnInit(): void {
    
  }

}
