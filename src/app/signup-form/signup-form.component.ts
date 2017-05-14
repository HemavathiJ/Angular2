import {Component,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidators';


@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent{
    signupForm: FormGroup = null;

    constructor(private fb: FormBuilder) {
        this.signupForm = fb.group({
            username: ['', Validators.compose([
                            Validators.required,
                            CustomValidators.noSpaces
                      ]), CustomValidators.unique],
            password: ['', Validators.required]
        })
    }

    submit() {
        console.log(this.signupForm.value);
        
    }
}