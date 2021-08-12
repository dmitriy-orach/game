import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { HelloComponent } from './components/hello/hello.component';
import { HeroComponent } from './components/hero/hero.component';
import { LevelUpComponent } from './components/level-up/level-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full'},
    { path: 'hello', component: HelloComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'arena', component: ArenaComponent },
    { path: 'level-up', component: LevelUpComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
