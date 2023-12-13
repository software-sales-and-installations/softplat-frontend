import { InputProps } from './TextareaTypes.tsx';
import styles from './Textarea.module.scss';
/**
 * Компонент поля ввода текста.
 */
export const Textarea = ({
                        extClassName,
                        inputId,
                        isValid,
                        width,
                        height,
                        rows,
                        cols,
  ...props
                      }: InputProps) => {
  return (
    <textarea
      id={inputId}
      rows={rows}
      cols={cols}
      className={[styles.textarea, isValid && styles.textarea_invalid, extClassName].join(' ')}
      style={{width: `${width}`, height: `${height}`}}
      {...props}>
    </textarea>
  );
};

