import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '../../../shared/title';
import { Description } from '../../../shared/description';
import { TextInput } from '../shared/text-input';
import { Checkbox } from '../shared/checkbox';
import { RadioGroup, type RadioOption } from '../shared/radio-group';
import { Textarea } from '../shared/textarea';
import { Button } from '../shared/button';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Title, Description, TextInput, Checkbox, RadioGroup, Textarea, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  title = signal('CONTACTA CON NOSOTROS');
  subtitle = signal('Ponte en contacto con nosotros si tienes una consulta o quieres hablar de tu proyecto.');

  contactForm: FormGroup;

  radioOptions = signal<RadioOption[]>([
    { value: 'hotel', label: 'Hotel' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'casa', label: 'Casa' }
  ]);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      apellido: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
      alojamiento: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted', this.contactForm.value);
    } else {
      console.log('Form invalid');
    }
  }
}
