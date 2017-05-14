import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../customValidators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup = null

  constructor(private cp: FormBuilder) { 
    this.changePasswordForm = this.cp.group({
      oldpassword: ['', Validators.compose([
                        Validators.required]),
                        CustomValidators.checkOldPassword
                    ],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, { validator: CustomValidators.passwordsShouldMatch })
  }

  ngOnInit() {
  }

  changepassword() {
    if (this.changePasswordForm.valid) {
      console.log("password changed successfully!!");
    }
  }
}
