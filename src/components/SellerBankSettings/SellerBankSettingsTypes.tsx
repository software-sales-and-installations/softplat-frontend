export interface ISellerBankData{
    bik?: number;
    ogrnip?: number;
    ogrn?: number
    account?: number;
    INN?: number;
    kpp?: number;
    orgForm?: IOrgForm;
    address?: string;
}

interface IOrgForm {
    value: string;
    label: string
}
