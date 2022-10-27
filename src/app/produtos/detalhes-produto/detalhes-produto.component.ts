import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit, OnDestroy {
  produto?: IProduto | null;
  id!: number;
  inscricao: Subscription = new Subscription;
  quantidade = 1;


  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
    
  ) { }

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const produtoId = Number(routeParams.get('id'));
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    //this.id = this.route.snapshot.params['id']
    this.produto = this.produtosService.getOne(this.id);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe;
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.addAoCarrinho(produto);
  }

}
