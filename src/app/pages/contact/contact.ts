import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

function nameValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  if (!value) return null;
  return /^[a-zA-Z\s.'-]+$/.test(value) ? null : { invalidName: true };
}

function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  if (!value) return null; // phone is optional
  return /^[+]?[0-9\s()-]{7,15}$/.test(value) ? null : { invalidPhone: true };
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  form: FormGroup;
  submitting = false;
  submitted = false;
  successMessage = false;
  serverError = '';
  private formLoadTime = 0;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [phoneValidator]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
      // honeypot — left visually hidden in the template, real visitors never touch it
      company: [''],
    });
  }

  ngOnInit(): void {
    this.formLoadTime = Date.now();
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.serverError = '';

    if (this.form.invalid) {
      return;
    }

    // Honeypot tripped — a bot filled a field a human never sees
    if (this.form.value.company) {
      this.fakeSuccessAndReset();
      return;
    }

    // Submitted faster than any real person could type this form
    if (Date.now() - this.formLoadTime < 3000) {
      this.fakeSuccessAndReset();
      return;
    }

    this.submitting = true;
    const { company, ...payload } = this.form.value;

    this.http.post('/api/contact', payload).subscribe({
      next: () => {
        this.submitting = false;
        this.fakeSuccessAndReset();
      },
      error: () => {
        this.submitting = false;
        this.serverError = 'Something went wrong sending your message. Please try again or email us directly.';
      },
    });
  }

  private fakeSuccessAndReset(): void {
    this.submitted = false;
    this.successMessage = true;
    this.form.reset();
    setTimeout(() => (this.successMessage = false), 6000);
  }
}