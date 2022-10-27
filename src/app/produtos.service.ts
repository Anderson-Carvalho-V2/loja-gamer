import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  
  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number){
    let produtos = this.getAll();
    for(let i = 0; i < produtos.length; i++){
      let produto = produtos[i];
      if(produto.id == produtoId){
        return produto;
      }
    }
    return null;
  }
  /*
  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id = produtoId);

  }
  */

}
