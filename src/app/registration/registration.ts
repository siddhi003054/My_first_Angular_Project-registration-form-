import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  isSubmitting = false;

  departments = ['Computer Science', 'IT', 'Electronics', 'Mechanical', 'Civil'];
  skillsList = ['Java', 'Python', 'Web Development', 'Database'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supabaseService: SupabaseService   // ✅ inject service
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      department: ['', Validators.required],
      skills: this.fb.array([], Validators.required), // ✅ FormArray for checkboxes
      address: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  // For checkbox selection (skills)
  onSkillChange(event: any) {
    const skillsFormArray = this.registrationForm.get('skills') as FormArray;
    if (event.target.checked) {
      skillsFormArray.push(this.fb.control(event.target.value));
    } else {
      const index = skillsFormArray.controls.findIndex(x => x.value === event.target.value);
      skillsFormArray.removeAt(index);
    }
  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      this.isSubmitting = true;

      try {
        // ✅ Convert FormArray into string array
        const formValue = { ...this.registrationForm.value };
        formValue.skills = formValue.skills.map((skill: any) => skill);

        await this.supabaseService.insertStudent(formValue);

        console.log('Form submitted successfully:', formValue);

        this.registrationForm.reset();
        this.router.navigate(['/success']);
      } catch (error) {
        console.error('Error inserting student:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
