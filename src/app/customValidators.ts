import { FormControl, FormGroup } from '@angular/forms';

export class CustomValidators {
    static unique(control: FormControl) {
        return new Promise( (resolve, reject) => {
            setTimeout( function(){
                if(control.value === 'test123') {
                    resolve({ ShouldbeUnique: true });
                } else {
                    resolve(null);
                }
            }, 1000)
        });
    }

    static checkOldPassword(control: FormControl) {
        return new Promise( (resolve, reject) => {
            setTimeout(function(){
                if(control.value === 'test') {
                    resolve({ confirmPassword: true });
                } else {
                    resolve({ confirmPassword: false });
                }
            }, 1000);
        });
    }
    static noSpaces(control: FormControl) {
        if(control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

    static passwordsShouldMatch(group: FormGroup) {
        let newpassword = group.get('newpassword').value;
        
        let confirmpassword = group.get('confirmpassword').value;

        if(newpassword == '' || confirmpassword == '') {
            return null;
        }
        if(newpassword != confirmpassword) {
            return { passwordsShouldMatch: true }
        }

    }

    
}