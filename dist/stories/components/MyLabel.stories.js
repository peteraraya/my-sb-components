"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
// 1. Pide una exportación por defecto
exports.default = {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
    }
};
// 2. Utilización de nuestro componente - definimos el tipo Props a los Label
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// 3. Creamos una página : creando una copia rompiendo la referencia que trae javascript por defecto | Para evitar mutaciones
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Etiqueta ejemplo',
    size: 'normal',
    allCaps: false // true para que capitalize todos los caracteres
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'Etiqueta all caps',
    size: 'normal',
    allCaps: true // true para que capitalize todos los caracteres
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Etiqueta Secondary',
    size: 'normal',
    color: 'text-secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Etiqueta Tertiary',
    size: 'normal',
    color: 'text-tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'h1',
    backgroundColor: '#b19ca6',
};
