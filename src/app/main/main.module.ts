import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { StartComponent } from './components/start/start.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        TranslateModule
    ],
    declarations: [StartComponent]
})
export class MainModule {}
