import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent implements OnInit {

  cadastroFilme: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.cadastroFilme = this.formBuilder.group({
      numeroFilme:['',Validators.required],
      tipoProduto:['',Validators.required],
      tipoFilme:['',Validators.required],
      genero:['',Validators.required],
      tituloFilme:['',Validators.required],
      principaisAtores:['',Validators.required],
      principaisDiretores:['',Validators.required],
      fornecedor:['',Validators.required],
      tipoIdioma:['',Validators.required],
      valorLocacao:['',Validators.required],
      dataCadastro:['',Validators.required]
    })
  }
  cadastrarFilme(){
    if(this.cadastroFilme.valid){
    alert('Filme Cadastrado com Sucesso!')
    }
  }
}
