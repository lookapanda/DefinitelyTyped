// Type definitions for airbnb-prop-types 2.8
// Project: https://github.com/airbnb/prop-types#readme
// Definitions by: lookapanda <https://github.com/lookapanda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { ReactInstance } from 'react';
export type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;

export interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T>;
}

export type ValidationMap<T> = {[K in keyof T]?: Validator<T> };

export interface Specifier<T> {
    validator: Validator<T>;
    min: number;
    max: number;
}

export type MaxFunctionOrNumber = ((values: { max: number }) => number) | number;
export type MinFunctionOrNumber = ((values: { min: number }) => number) | number;

export interface BetweenOptionsLtAndGt {
    lt: MaxFunctionOrNumber;
    gt: MinFunctionOrNumber;
}

export interface BetweenOptionsLteAndGt {
    lte: MaxFunctionOrNumber;
    gt: MinFunctionOrNumber;
}

export interface BetweenOptionsLtAndGte {
    lt: MaxFunctionOrNumber;
    gte: MinFunctionOrNumber;
}

export interface BetweenOptionsLt {
    lt: MaxFunctionOrNumber;
}

export interface BetweenOptionsLte {
    lte: MaxFunctionOrNumber;
}

export interface BetweenOptionsGt {
    gt: MinFunctionOrNumber;
}

export interface BetweenOptionsGte {
    gte: MinFunctionOrNumber;
}

export type BetweenOptions =
    BetweenOptionsLtAndGt |
    BetweenOptionsLteAndGt |
    BetweenOptionsLtAndGte |
    BetweenOptionsLt |
    BetweenOptionsLte |
    BetweenOptionsGt |
    BetweenOptionsGte;

export const nonNegativeInteger: Requireable<any>;
export function and(types: Array<Validator<any>>, name?: string): Requireable<any>;
export function between(options: BetweenOptions): Requireable<any>;
export function childrenHavePropXorChildren(prop: string | symbol): Requireable<any>;
export function childrenOf(propType: Validator<any>): Requireable<any>;
export function childrenOfType(...types: Array<'*' | ReactInstance>): Requireable<any>;
export function childrenSequenceOfValidator(...specifiers: Array<Specifier<any>>): Requireable<any>;
export function componentWithName(name: string): Requireable<any>;
export function elementType(type: '*' | string | Component): Requireable<any>;
export function explicitNull(): Requireable<any>;
export function forbidExtraProps(propTypes: ValidationMap<any>): Requireable<any>;
export function integer(): Requireable<any>;
export function keysOf(propType: Validator<any>, name?: string): Requireable<any>;
export function mutuallyExclusiveProps(propType: Validator<any>, ...exclusiveProps: string[]): Requireable<any>;
export function mutuallyExclusiveTrueProps(...exclusiveProps: string[]): Requireable<any>;
export function nChildren(n: number, propType: Validator<any>): Requireable<any>;
export function nonNegativeNumber(): Requireable<any>;
export function numericString(): Requireable<any>;
export function object(): Requireable<any>;
export function or(validators: Array<Validator<any>>, name?: string): Requireable<any>;
export function range(min: number, max: number): Requireable<any>;
export function restrictedProp(messageFunction: (...args: any[]) => string | null): Requireable<any>;
export function sequenceOf(...specifiers: Array<Specifier<any>>): Requireable<any>;
export function shape(shapTypes: ValidationMap<any>): Requireable<any>;
export function uniqueArray(): Requireable<any>;
export function uniqueArrayof(type: Validator<any>, ...rest: any[]): Requireable<any>;
export function valuesOf(propType: Validator<any>): Requireable<any>;
export function withShape(type: Validator<any>, shapeTypes: ValidationMap<any>): Requireable<any>;
