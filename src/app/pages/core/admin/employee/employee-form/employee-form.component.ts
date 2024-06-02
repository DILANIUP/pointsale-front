import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;

  }

  get buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      lastnames: [null, [Validators.required, Validators.minLength(5)]],
      id: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      birthday: [new Date(), [Validators.required]],
      email: [null, [Validators.required, Validators.minLength(2)]],
      phone: [null, [Validators.required, Validators.pattern('^[0-9]{9}$')]]
    })
  }

  validateForm() {
    if (this.form.valid) {
      alert('El formulario es valido')
    } else {
      alert('El formulario no es valido');
    }
  }



  get nameField():AbstractControl {
    return this.form.controls['names']
  }

  get lastnamesField():AbstractControl {
    return this.form.controls['lastnames']
  }

  get idField():AbstractControl {
    return this.form.controls['id']
  }

  get birthdayField():AbstractControl {
    return this.form.controls['birthday']
  }

  get emailField():AbstractControl {
    return this.form.controls['email']
  }

  get phoneField():AbstractControl {
    return this.form.controls['phone']
  }
}
