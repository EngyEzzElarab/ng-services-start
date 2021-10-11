import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { loggingservice } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private loggingService:loggingservice,private accountsService:AccountsService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
