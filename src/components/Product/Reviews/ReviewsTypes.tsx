import { IReview } from '../ReviewOneCard/ReviewOneCardTypes..tsx';

export interface IComments {
  comments: [IReview];
  totalComments: number;
}
