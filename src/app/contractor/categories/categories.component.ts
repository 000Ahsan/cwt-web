import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WorkCategoryService } from '../../core/services/work-category.service';
import { WorkCategory } from '../../core/models/work-category.model';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { User } from '../../core/models/auth.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, Breadcrumb],
    templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
    private fb = inject(FormBuilder);
    private categoryService = inject(WorkCategoryService);
    private toastr = inject(ToastrService);
    private authService = inject(AuthService);

    categories: WorkCategory[] = [];
    loading = false;
    submitting = false;
    showModal = false;
    isEditing = false;
    selectedId: string | null = null;
    categoryForm: FormGroup;

    constructor() {
        this.categoryForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(50)]],
        });
    }

    ngOnInit(): void {
        this.loadCategories();
    }

    get user(): User | null {
        return this.authService.currentUserValue;
    }

    loadCategories(): void {
        this.loading = true;
        this.categoryService.getAll()
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: (data) => this.categories = data,
                error: (err) => this.toastr.error('Failed to load categories')
            });
    }

    openCreateModal(): void {
        this.isEditing = false;
        this.selectedId = null;
        this.categoryForm.reset({ name: '' });
        this.showModal = true;
    }

    openEditModal(category: WorkCategory): void {
        this.isEditing = true;
        this.selectedId = category.id;
        this.categoryForm.patchValue({
            name: category.name,
        });
        this.showModal = true;
    }

    closeModal(): void {
        this.showModal = false;
    }

    onSubmit(): void {
        if (this.categoryForm.invalid) {
            return;
        }

        this.submitting = true;
        const dto = this.categoryForm.value;

        const action = this.isEditing && this.selectedId
            ? this.categoryService.update(this.selectedId, dto)
            : this.categoryService.create(dto);

        action.pipe(finalize(() => this.submitting = false))
            .subscribe({
                next: () => {
                    this.toastr.success(`Category ${this.isEditing ? 'updated' : 'created'} successfully`);
                    this.closeModal();
                    this.loadCategories();
                },
                error: (err) => {
                    this.toastr.error(err.error?.message || 'Failed to save category');
                }
            });
    }

    onDelete(category: WorkCategory): void {
        if (category._count && (category._count.projectLinks > 0 || category._count.workerLinks > 0)) {
            const confirmed = confirm(`This category is linked to ${category._count.projectLinks} projects and ${category._count.workerLinks} workers. Are you sure you want to delete it? This action cannot be undone.`);
            if (!confirmed) return;
        } else {
            if (!confirm(`Are you sure you want to delete category "${category.name}"?`)) return;
        }

        this.categoryService.delete(category.id).subscribe({
            next: () => {
                this.toastr.success('Category deleted successfully');
                this.loadCategories();
            },
            error: (err) => this.toastr.error('Failed to delete category')
        });
    }
}
