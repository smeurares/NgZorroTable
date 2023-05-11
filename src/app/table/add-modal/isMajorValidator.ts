import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isMajorValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value !== null && isNaN(value)) {
    return { isNaN: true };
  }

  const age = Number(value);
  if (age < 18) {
    return { over18: true };
  }

  return null;
}
