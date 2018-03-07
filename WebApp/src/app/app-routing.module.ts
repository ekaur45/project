import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: "**", component: PageNotFoundComponent }
    
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports:[RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
