import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function datePickerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = true;
    if (control.value) {
      const date: Date = control.value;
      if (date.getFullYear() <= 2004) {
        forbidden = false;
      }
    }
    return forbidden ? { invalidDOBYear: true } : null;
  };
}


