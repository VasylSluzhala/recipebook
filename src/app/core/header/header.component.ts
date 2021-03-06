import { Component } from '@angular/core';
import {Response} from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private dataStorage: DataStorageService,
                public authService: AuthService){}

    onSaveData(){
        this.dataStorage.saveData()
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onGetData(){
        this.dataStorage.getData();
    }

    onLogout(){
        this.authService.signOut();
    }
}