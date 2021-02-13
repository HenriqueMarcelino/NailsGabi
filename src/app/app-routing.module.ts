import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AlongamentoComponent } from './alongamento/alongamento.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'certificacoes', component: CertificacoesComponent},
  {path: 'alongamento', component: AlongamentoComponent},
  {path: 'design', component: DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
