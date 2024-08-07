import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css',
})
export class RegisterModalComponent {}
