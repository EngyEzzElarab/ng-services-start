import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { loggingservice } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService,loggingservice]
})
export class AppComponent {
  accounts :{name:string, status: string}[]=[];
  constructor(private accountsService:AccountsService){}

  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }
 
}
