import { IJSONSchemaViewerTheme } from '../types';

export const light: IJSONSchemaViewerTheme = {
  base: 'light',

  canvas: {
    bg: '#fff',
    fg: '#111',
    error: 'red',
    muted: 'rgba(0, 0, 0, 0.5)',
  },

  divider: {
    bg: '#dae1e7',
  },

  row: {
    hoverBg: '#e9e9e9',
    hoverFg: '#111',
    evenBg: '#f3f3f3',
  },

  types: {
    object: '#00f',
    array: '#008000',
    allOf: '#B8860B',
    oneOf: '#B8860B',
    anyOf: '#B8860B',
    null: '#ff7f50',
    integer: '#a52a2a',
    number: '#a52a2a',
    boolean: '#ff69b4',
    binary: '#66cdaa',
    string: '#008080',
    $ref: '#8a2be2',
  },
};
