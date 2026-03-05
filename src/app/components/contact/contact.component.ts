import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  private fb = inject(FormBuilder);
  
  developer = this.portfolioService.getDeveloper;
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactMethods = [
    { icon: '✉️', label: 'Email', value: 'shivasunke1006@gmail.com', href: 'mailto:shivasunke1006@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8247090916', href: 'tel:+918247090916' },
    { icon: '💼', label: 'LinkedIn', value: 'shivasunke', href: 'https://linkedin.com/in/shivasunke/' },
    { icon: '🔗', label: 'GitHub', value: 'DotNetFusion', href: 'https://github.com/DotNetFusion' }
  ];

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);

    // Simulate form submission (in production, integrate with backend API)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.contactForm.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 3000);
    }, 1000);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (field.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (field.errors['minlength']) {
      return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }
    return '';
  }
}
