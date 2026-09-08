import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User, UserRole, Currency } from '../../core/models/auth.model';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import Swal from 'sweetalert2';
import { CURRENCY_OPTIONS, CurrencyMeta } from '../../core/services/currency.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, Breadcrumb],
    templateUrl: './profile.html',
    styles: [`
        .profile-preview-card .preview-img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
        .company-logo-preview {
            width: 120px;
            height: 120px;
            object-fit: contain;
            background: #f8f9fa;
        }
        .section-title {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--theme-default, #24695c);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(36, 105, 92, 0.12);
        }
    `],
})
export class ProfileComponent implements OnInit {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);

    public profileForm!: FormGroup;
    public user: User | null = null;
    public selectedImage: string | ArrayBuffer | null = null;
    public selectedCompanyLogo: string | ArrayBuffer | null = null;
    public imageFile: File | null = null;
    public companyLogoFile: File | null = null;
    public loading = false;

    public isContractor = false;
    public currencyOptions: CurrencyMeta[] = CURRENCY_OPTIONS;
    public UserRole = UserRole;

    readonly defaultAvatar = 'assets/images/user/user.png';
    readonly defaultCompanyLogo = 'assets/images/dashboard/product-1.png';

    ngOnInit() {
        this.user = this.authService.currentUserValue;
        this.isContractor = this.user?.role === UserRole.CONTRACTOR;
        this.initForm();
    }

    initForm() {
        this.profileForm = this.fb.group({
            name: [this.user?.name || '', [Validators.required]],
            email: [this.user?.email || '', [Validators.required, Validators.email]],
            phone: [this.user?.phone || ''],
            password: [''],
            currency: [this.user?.currency || Currency.USD],
            companyName: [this.user?.companyName || ''],
            companyAddress: [this.user?.companyAddress || ''],
        });

        this.selectedImage = this.user?.image || this.defaultAvatar;
        if (this.isContractor) {
            this.selectedCompanyLogo = this.user?.companyLogo || this.defaultCompanyLogo;
        }
    }

    onProfileImageChange(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        this.imageFile = file;
        const reader = new FileReader();
        reader.onload = () => (this.selectedImage = reader.result);
        reader.readAsDataURL(file);
    }

    onCompanyLogoChange(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        this.companyLogoFile = file;
        const reader = new FileReader();
        reader.onload = () => (this.selectedCompanyLogo = reader.result);
        reader.readAsDataURL(file);
    }

    onSubmit() {
        if (this.profileForm.invalid) {
            this.profileForm.markAllAsTouched();
            return;
        }

        this.loading = true;
        const formData = new FormData();
        formData.append('name', this.profileForm.get('name')?.value);
        formData.append('email', this.profileForm.get('email')?.value);

        const phone = (this.profileForm.get('phone')?.value || '').trim();
        if (phone) {
            formData.append('phone', phone);
        }

        const password = this.profileForm.get('password')?.value;
        if (password) {
            formData.append('password', password);
        }

        if (this.imageFile) {
            formData.append('image', this.imageFile);
        }

        if (this.isContractor) {
            formData.append('currency', this.profileForm.get('currency')?.value);
            formData.append('companyName', (this.profileForm.get('companyName')?.value || '').trim());
            formData.append('companyAddress', (this.profileForm.get('companyAddress')?.value || '').trim());
            if (this.companyLogoFile) {
                formData.append('companyLogo', this.companyLogoFile);
            }
        }

        this.authService.updateUserProfile(formData).subscribe({
            next: () => {
                this.loading = false;
                this.user = this.authService.currentUserValue;
                this.imageFile = null;
                this.companyLogoFile = null;
                if (this.user?.image) {
                    this.selectedImage = this.user.image;
                }
                if (this.isContractor && this.user?.companyLogo) {
                    this.selectedCompanyLogo = this.user.companyLogo;
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated',
                    text: 'Your profile has been updated successfully.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            },
            error: (err) => {
                this.loading = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.error?.message || 'Something went wrong while updating your profile.',
                });
            },
        });
    }
}
