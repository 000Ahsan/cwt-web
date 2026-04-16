import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Currency } from '../models/auth.model';

export interface CurrencyMeta {
    code: Currency;
    label: string;
    symbol: string;
}

export const CURRENCY_OPTIONS: CurrencyMeta[] = [
    { code: Currency.USD, label: 'US Dollar', symbol: '$' },
    { code: Currency.CAD, label: 'Canadian Dollar', symbol: '$' },
    { code: Currency.EUR, label: 'Euro', symbol: '€' },
    { code: Currency.GBP, label: 'British Pound', symbol: '£' },
    { code: Currency.PKR, label: 'Pakistani Rupee', symbol: '₨' },
];

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private authService = inject(AuthService);

    /** Returns the Currency enum value of the current user, defaulting to USD */
    get currentCurrency(): Currency {
        return this.authService.currentUserValue?.currency ?? Currency.USD;
    }

    /** Returns the metadata for the current user's currency */
    get currentMeta(): CurrencyMeta {
        return CURRENCY_OPTIONS.find(c => c.code === this.currentCurrency) ?? CURRENCY_OPTIONS[0];
    }

    /** Returns the symbol (e.g. '$', '€') */
    getSymbol(): string {
        return this.currentMeta.symbol;
    }

    /** Returns the ISO code (e.g. 'USD') */
    getCode(): string {
        return this.currentMeta.code;
    }

    /** Format a number with the contractor's currency symbol (e.g. '$1,234.50') */
    format(amount: number): string {
        const symbol = this.getSymbol();
        return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    /** Returns all available currency options */
    getOptions(): CurrencyMeta[] {
        return CURRENCY_OPTIONS;
    }
}
