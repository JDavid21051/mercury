/*
 * @JDavid21051. Copyright ©. 2023. All rights reserved.
 * @JDavid21051. Copyright ©. 2023. Todos los derechos reservados.
 */

import {VisibilityEnum, WeatherEnum} from './utils/enums';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: WeatherEnum;
    visibility: VisibilityEnum;
    comment: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// store manage
export interface IStore {
    id: number;
    name: string;
    nit: string;
    uuid: string;
    phone: string;
    email: string;
    open_at: Date;
    location: string;
    category: string;
    legal_name: string;
    legal_email: string;
    legal_phone: string;
}

export interface IStoreUpdate extends Omit<IStore, 'uuid' | 'open_at'> {
}

export interface IStoreControl extends Omit<IStoreUpdate, 'id'> {
}

export interface ISite {
    id: number;
    uuid: string;
    name: string;
    state: string;
    city: string;
    postal_code: number;
    address: string;
    phone: string;
    number_employees: number;
    open_at: Date;
    close_at: Date;
    manager_name: string;
    manager_email: string;
}

export interface ISiteUpdate extends Omit<ISite, 'uuid'> {
}

export interface ISiteControl extends Omit<ISiteUpdate, 'id'> {
}


export interface ISupplierFake {
    id: number;
    uuid: string;
    name: string;
    nit: string;
}

export interface ISupplier {
    id: number;
    name: string;
    nit: string;
}

export interface ISupplierControl extends Omit<ISupplier, 'id'> {
}


export interface IBill {
    id: number;
    uuid: string;
    reference: string;
    item_count: number;
    sub_total: number;
    value_iva: number;
    value_total: number;
    means_payment: string;
    buy_at: Date;
    register_at: Date;
}

export interface IBillUpdate extends Omit<IBill, 'uuid' | 'register_at'> {
}

export interface IBillControl extends Omit<IBillUpdate, 'id'> {
}

export interface IProduct {
    id: number;
    uuid: string;
    basic_name: string;
    full_name: string;
    description: string;
    price_total: number;
    price_unit: number;
    quantity: number;
    content: string;
    content_type: string;
}

export interface IProductUpdate extends Omit<IProduct, 'uuid' | 'register_at'> {
}

export interface IProductControl extends Omit<IProductUpdate, 'id'> {
}
