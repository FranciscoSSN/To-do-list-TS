import styles from './Button.module.css'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...props}: ButtonProps) {
    return(
        <button className={styles.container} {...props}>
            {children}
        </button>
    )
}