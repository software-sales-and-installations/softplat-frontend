import { IProductCard } from "../ProductCard/ProductCardTypes";

export interface IComplaintsObject{
    complaints: IComplaint;
    totalComplaints: number;
}

export interface IComplaint{
    id: number;
    reason: string;
    buyer: IBuyer;
    product: IProductCard;
    createdAt: Date;
    complaintStatus: string;
}

interface IBuyer{
    id: string;
    email: string;
    name: string;
    phone: string;
    registrationTime: Date;
}

export interface INewComplaintsList{
    name: string;
    vendor: string;
    seller: string;
    id: number;
    complaints: number;
}
