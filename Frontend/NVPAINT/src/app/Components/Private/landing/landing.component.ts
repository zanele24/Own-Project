import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  Form = new FormGroup({
    employee_num: new FormControl(''),
    password: new FormControl(''),
  });


  submitted = false;


  constructor(private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      employee_num: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }

  signin() {

    this.submitted = true;
    if (this.Form.invalid) {
      this.showError();
      return
    }{

    let user = {
      employee_num: this.Form.value.employee_num,
      password: this.Form.value.password
    }

    this.auth.signin(user).subscribe(res=>{
      this.showSuccess();
      this.router.navigateByUrl('/home')
      console.log(res)
    })
   
  }}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is Added' });
  }


  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fields Should not be Empty' });
  }
}
