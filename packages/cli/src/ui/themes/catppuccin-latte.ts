/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from './theme.js';

const latteColors: ColorsTheme = {
  type: 'light',
  Background: '#EFF1F5',
  Foreground: '#4C4F69',
  LightBlue: '#1E66F5',
  AccentBlue: '#1E66F5',
  AccentPurple: '#7287FD',
  AccentCyan: '#179299',
  AccentGreen: '#40A02B',
  AccentYellow: '#DF8E1D',
  AccentRed: '#D20F39',
  Comment: '#8C8FA1',
  Gray: '#8C8FA1',
  GradientColors: ['#7287FD', '#1E66F5'],
};

export const CatppuccinLatte: Theme = new Theme(
  'Catppuccin (Latte)',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: latteColors.Background,
      color: latteColors.Foreground,
    },
    'hljs-keyword': {
      color: latteColors.AccentPurple,
    },
    'hljs-literal': {
      color: latteColors.AccentPurple,
    },
    'hljs-symbol': {
      color: latteColors.AccentPurple,
    },
    'hljs-name': {
      color: latteColors.AccentPurple,
    },
    'hljs-link': {
      color: latteColors.AccentPurple,
      textDecoration: 'underline',
    },
    'hljs-built_in': {
      color: latteColors.AccentCyan,
    },
    'hljs-type': {
      color: latteColors.AccentCyan,
    },
    'hljs-number': {
      color: latteColors.AccentGreen,
    },
    'hljs-class': {
      color: latteColors.AccentGreen,
    },
    'hljs-string': {
      color: latteColors.AccentYellow,
    },
    'hljs-meta-string': {
      color: latteColors.AccentYellow,
    },
    'hljs-regexp': {
      color: latteColors.AccentRed,
    },
    'hljs-template-tag': {
      color: latteColors.AccentRed,
    },
    'hljs-subst': {
      color: latteColors.Foreground,
    },
    'hljs-function': {
      color: latteColors.Foreground,
    },
    'hljs-title': {
      color: latteColors.Foreground,
    },
    'hljs-params': {
      color: latteColors.Foreground,
    },
    'hljs-formula': {
      color: latteColors.Foreground,
    },
    'hljs-comment': {
      color: latteColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: latteColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: latteColors.Comment,
    },
    'hljs-meta': {
      color: latteColors.Gray,
    },
    'hljs-meta-keyword': {
      color: latteColors.Gray,
    },
    'hljs-tag': {
      color: latteColors.Gray,
    },
    'hljs-variable': {
      color: latteColors.AccentBlue,
    },
    'hljs-template-variable': {
      color: latteColors.AccentBlue,
    },
    'hljs-attr': {
      color: latteColors.LightBlue,
    },
    'hljs-attribute': {
      color: latteColors.LightBlue,
    },
    'hljs-builtin-name': {
      color: latteColors.LightBlue,
    },
    'hljs-section': {
      color: latteColors.AccentYellow,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: latteColors.AccentYellow,
    },
    'hljs-selector-tag': {
      color: latteColors.AccentYellow,
    },
    'hljs-selector-id': {
      color: latteColors.AccentYellow,
    },
    'hljs-selector-class': {
      color: latteColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: latteColors.AccentYellow,
    },
    'hljs-selector-pseudo': {
      color: latteColors.AccentYellow,
    },
    'hljs-addition': {
      backgroundColor: '#E6FFED',
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      backgroundColor: '#FFEBE9',
      display: 'inline-block',
      width: '100%',
    },
  },
  latteColors,
);
