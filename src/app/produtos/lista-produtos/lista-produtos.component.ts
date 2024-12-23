import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
 templateUrl: 'lista-produtos.component.html'
  
})
export class ListaProdutosComponent implements OnInit {
  
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error: (error) => console.log(error),
      complete: () => console.log('Produtos carregados com sucesso!')
    });
    
      
  }

}
