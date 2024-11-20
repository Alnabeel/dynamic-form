import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule],  // Add ReactiveFormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleForm = signal(true)
  title = 'dynamic-form';
  genderOption = ["Male","Female"]
  // Create a reactive form group with a single 'name' control
  userForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3),Validators.required]), // The 'name' control
    gender : new FormControl ("male",[Validators.required])
  });
  onSubmit (){
    const value = this.userForm.value;
    console.log(value,"ll");
    
  }
  formToggle() {
    this.toggleForm.set(!this.toggleForm())
  }
}
