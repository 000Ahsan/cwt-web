import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User, UserRole, Currency } from '../../core/models/auth.model';
import { environment } from '../../../../public/environments/environment';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import Swal from 'sweetalert2';
import { CURRENCY_OPTIONS, CurrencyMeta } from '../../core/services/currency.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, Breadcrumb],
    templateUrl: './profile.html',
})
export class ProfileComponent implements OnInit {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private apiUrl = environment.apiBaseUrl;

    public profileForm!: FormGroup;
    public user: User | null = null;
    public selectedImage: string | ArrayBuffer | null = null;
    public imageFile: File | null = null;
    public loading: boolean = false;

    // Currency
    public isContractor = false;
    public currencyOptions: CurrencyMeta[] = CURRENCY_OPTIONS;
    public UserRole = UserRole;

    ngOnInit() {
        this.user = this.authService.currentUserValue;
        this.isContractor = this.user?.role === UserRole.CONTRACTOR;
        this.initForm();
    }

    initForm() {
        this.profileForm = this.fb.group({
            name: [this.user?.name || '', [Validators.required]],
            email: [this.user?.email || '', [Validators.required, Validators.email]],
            password: [''],
            currency: [this.user?.currency || Currency.USD],
        });
        if (this.user?.image) {
            this.selectedImage = this.user.image;
        }
    }

    onFileChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.imageFile = file;
            const reader = new FileReader();
            reader.onload = e => this.selectedImage = reader.result;
            reader.readAsDataURL(file);
        }
    }

    onSubmit() {
        if (this.profileForm.invalid) return;

        this.loading = true;
        const formData = new FormData();
        formData.append('name', this.profileForm.get('name')?.value);
        formData.append('email', this.profileForm.get('email')?.value);
        const password = this.profileForm.get('password')?.value;
        if (password) {
            formData.append('password', password);
        }
        if (this.imageFile) {
            formData.append('image', this.imageFile);
        }
        // Append currency if contractor
        if (this.isContractor) {
            formData.append('currency', this.profileForm.get('currency')?.value);
        }

        this.authService.updateUserProfile(formData).subscribe({
            next: (res: any) => {
                this.loading = false;
                this.user = this.authService.currentUserValue;
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated',
                    text: 'Your profile has been updated successfully.',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.error?.message || 'Something went wrong while updating your profile.',
                });
            }
        });
    }
}
