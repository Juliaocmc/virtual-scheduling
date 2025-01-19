import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function twoWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const words = value.trim().split(/\s+/);
    return words.length >= 2 ? null : { twoWords: true };
  };
}

export function documentValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const document = value.replace(/\D/g, '');

    if (!/^\d{11}$/.test(document) || isInvalidDocument(document)) {
      return { invalidDocument: true };
    }

    return null;
  };
};

function isInvalidDocument(document: string): boolean {
  if (/^(\d)\1+$/.test(document)) {
    return true;
  }

  const calcDigit = (base: number) =>
    Array.from({ length: base }, (_, i) => parseInt(document[i]) * (base + 1 - i))
      .reduce((sum, current) => sum + current, 0) % 11;

  const firstDigit = calcDigit(9) < 2 ? 0 : 11 - calcDigit(9);
  const secondDigit = calcDigit(10) < 2 ? 0 : 11 - calcDigit(10);

  return firstDigit !== parseInt(document[9]) || secondDigit !== parseInt(document[10]);
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const phoneRegex = /^\d{11}$/;

    if (!value) {
      return null;
    }

    const isValid = phoneRegex.test(value);
    return isValid ? null : { invalidPhone: { value } };
  };
}

export function startBeforeEndValidator(start: string, end: string): boolean {
    if (start && end) {
      if (start >= end) {
        return  true ;
      }
    }
    return false;
  };

