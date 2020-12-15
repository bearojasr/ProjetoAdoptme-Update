import{InicioComponent} from './componentes/inicio/inicio.component';
import{AdocaoComponent} from './componentes/adocao/adocao.component';
import{ContactoComponent} from './componentes/contacto/contacto.component';
import{SolicitacaoComponent} from './componentes/solicitacao/solicitacao.component';

import{Routes,RouterModule}from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';






const enlaces: Routes=[
    {path:'',component:InicioComponent},
    {path:'adocao',component:AdocaoComponent},
    {path:'solicitacao',component:SolicitacaoComponent},
    {path:'quienes_somos',component:ContactoComponent},
]
export const enlacesPronto: ModuleWithProviders=RouterModule.forRoot(enlaces);