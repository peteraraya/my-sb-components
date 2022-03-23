import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


// 1. Pide una exportación por defecto
export default {
  title: 'UI/Etiquetas/MyLabel', 
  component: MyLabel,
  argTypes: {
    size:{ control: 'select'},
    color: { control: 'select' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>;

// 2. Utilización de nuestro componente - definimos el tipo Props a los Label
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

// 3. Creamos una página : creando una copia rompiendo la referencia que trae javascript por defecto | Para evitar mutaciones
export const Basic = Template.bind({});
Basic.args = {
  label: 'Etiqueta ejemplo',
  size: 'normal',
  allCaps: false // true para que capitalize todos los caracteres
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'Etiqueta all caps',
  size: 'normal',
  allCaps: true // true para que capitalize todos los caracteres
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Etiqueta Secondary',
  size: 'normal',
  color: 'text-secondary'
  
}


export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Etiqueta Tertiary',
  size: 'normal',
  color: 'text-tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'h1',
  backgroundColor: '#b19ca6',
};

