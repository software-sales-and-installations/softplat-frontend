import { FC } from 'react';
import style from './Tooltip.module.scss';
import { ITooltipProps } from './TooltipTypes';


export const Tooltip: FC<ITooltipProps> = ({ text }) => {
    return <div className={style.tooltip}>{text}</div>;
  };
  
