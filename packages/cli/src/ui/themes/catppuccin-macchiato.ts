/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from './theme.js';

const macchiatoColors: ColorsTheme = {
  type: 'dark',
  Background: '#24273A',
  Foreground: '#CAD3F5',
  LightBlue: '#8AADF4',
  AccentBlue: '#8AADF4',
  AccentPurple: '#C6A0F6',
  AccentCyan: '#8BD5CA',
  AccentGreen: '#A6DA95',
  AccentYellow: '#EED49F',
  AccentRed: '#ED8796',
  Comment: '#6E738D',
  Gray: '#6E738D',
  GradientColors: ['#C6A0F6', '#8AADF4'],
};

export const CatppuccinMacchiato: Theme = new Theme(
  'Catppuccin (Macchiato)',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: macchiatoColors.Background,
      color: macchiatoColors.Foreground,
    },
    'hljs-keyword': {
      color: macchiatoColors.AccentPurple,
    },
    'hljs-literal': {
      color: macchiatoColors.AccentPurple,
    },
    'hljs-symbol': {
      color: macchiatoColors.AccentPurple,
    },
    'hljs-name': {
      color: macchiatoColors.AccentPurple,
    },
    'hljs-link': {
      color: macchiatoColors.AccentPurple,
      textDecoration: 'underline',
    },
    'hljs-built_in': {
      color: macchiatoColors.AccentCyan,
    },
    'hljs-type': {
      color: macchiatoColors.AccentCyan,
    },
    'hljs-number': {
      color: macchiatoColors.AccentGreen,
    },
    'hljs-class': {
      color: macchiatoColors.AccentGreen,
    },
    'hljs-string': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-meta-string': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-regexp': {
      color: macchiatoColors.AccentRed,
    },
    'hljs-template-tag': {
      color: macchiatoColors.AccentRed,
    },
    'hljs-subst': {
      color: macchiatoColors.Foreground,
    },
    'hljs-function': {
      color: macchiatoColors.Foreground,
    },
    'hljs-title': {
      color: macchiatoColors.Foreground,
    },
    'hljs-params': {
      color: macchiatoColors.Foreground,
    },
    'hljs-formula': {
      color: macchiatoColors.Foreground,
    },
    'hljs-comment': {
      color: macchiatoColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: macchiatoColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: macchiatoColors.Comment,
    },
    'hljs-meta': {
      color: macchiatoColors.Gray,
    },
    'hljs-meta-keyword': {
      color: macchiatoColors.Gray,
    },
    'hljs-tag': {
      color: macchiatoColors.Gray,
    },
    'hljs-variable': {
      color: macchiatoColors.AccentBlue,
    },
    'hljs-template-variable': {
      color: macchiatoColors.AccentBlue,
    },
    'hljs-attr': {
      color: macchiatoColors.LightBlue,
    },
    'hljs-attribute': {
      color: macchiatoColors.LightBlue,
    },
    'hljs-builtin-name': {
      color: macchiatoColors.LightBlue,
    },
    'hljs-section': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-selector-tag': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-selector-id': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-selector-class': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-selector-pseudo': {
      color: macchiatoColors.AccentYellow,
    },
    'hljs-addition': {
      backgroundColor: '#144212',
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      backgroundColor: '#600',
      display: 'inline-block',
      width: '100%',
    },
  },
  macchiatoColors,
);
