import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  title: string = 'Have any Questions??';

  myForm:FormGroup|any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      firstName: ['', [Validators.minLength(4), Validators.required]],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]],
    })
  }

  onSubmit() {
    alert("Your form has been submitted!!");
    console.log(this.myForm.value);
  }
}
