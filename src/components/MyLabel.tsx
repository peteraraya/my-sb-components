import './mylabel.css';

// se exporta la interfaz para resolver unos inconvenientes a futuro
export interface Props {
  /**
  * Este es el mensaje que se va mostrar en la etiqueta
  */
  label: string;
  /**
  * Este es el tamaño que tendrá la etiqueta | default: 'normal'
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Permite capitalizar a mayusuculas todos los caracteres de la etiqueta | default: false 
   */
  allCaps?: boolean;
  /**
    * Permite cambiar el color a la etiqueta | default: text-primary | text-secondary | text-tertiary
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Puedes elegir el tipo de color de fondo que quieres para la etiqueta 
   */
  backgroundColor?: string;
  /**
   * Puedes elegir el tipo de color que quieres para la etiqueta 
   */
  fontColor?: string;
}

export const MyLabel = ({
  label   = 'No label',
  size    = 'normal',
  allCaps = false,
  color = 'text-primary',
  backgroundColor = 'trasparent',
  fontColor,
  ...props
}: Props) => {
  return (
    <span
      className={`label  ${size} ${color}`}
      style={{background: backgroundColor, color: fontColor}}
      {...props}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

// aumenta compatibilidad con el componente
export default MyLabel;