/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from './theme.js';

const frappeColors: ColorsTheme = {
  type: 'dark',
  Background: '#303446',
  Foreground: '#C6D0F5',
  LightBlue: '#8CAAEE',
  AccentBlue: '#8CAAEE',
  AccentPurple: '#ca9ee6',
  AccentCyan: '#81C8BE',
  AccentGreen: '#A6D189',
  AccentYellow: '#e5c890',
  AccentRed: '#E78284',
  Comment: '#626880',
  Gray: '#626880',
  GradientColors: ['#ca9ee6', '#8CAAEE'],
};

export const CatppuccinFrappe: Theme = new Theme(
  'Catppuccin (Frappé)',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: frappeColors.Background,
      color: frappeColors.Foreground,
    },
    'hljs-keyword': {
      color: frappeColors.AccentPurple,
    },
    'hljs-literal': {
      color: frappeColors.AccentPurple,
    },
    'hljs-symbol': {
      color: frappeColors.AccentPurple,
    },
    'hljs-name': {
      color: frappeColors.AccentPurple,
    },
    'hljs-link': {
      color: frappeColors.AccentPurple,
      textDecoration: 'underline',
    },
    'hljs-built_in': {
      color: frappeColors.AccentCyan,
    },
    'hljs-type': {
      color: frappeColors.AccentCyan,
    },
    'hljs-number': {
      color: frappeColors.AccentGreen,
    },
    'hljs-class': {
      color: frappeColors.AccentGreen,
    },
    'hljs-string': {
      color: frappeColors.AccentYellow,
    },
    'hljs-meta-string': {
      color: frappeColors.AccentYellow,
    },
    'hljs-regexp': {
      color: frappeColors.AccentRed,
    },
    'hljs-template-tag': {
      color: frappeColors.AccentRed,
    },
    'hljs-subst': {
      color: frappeColors.Foreground,
    },
    'hljs-function': {
      color: frappeColors.Foreground,
    },
    'hljs-title': {
      color: frappeColors.Foreground,
    },
    'hljs-params': {
      color: frappeColors.Foreground,
    },
    'hljs-formula': {
      color: frappeColors.Foreground,
    },
    'hljs-comment': {
      color: frappeColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: frappeColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: frappeColors.Comment,
    },
    'hljs-meta': {
      color: frappeColors.Gray,
    },
    'hljs-meta-keyword': {
      color: frappeColors.Gray,
    },
    'hljs-tag': {
      color: frappeColors.Gray,
    },
    'hljs-variable': {
      color: frappeColors.AccentBlue,
    },
    'hljs-template-variable': {
      color: frappeColors.AccentBlue,
    },
    'hljs-attr': {
      color: frappeColors.LightBlue,
    },
    'hljs-attribute': {
      color: frappeColors.LightBlue,
    },
    'hljs-builtin-name': {
      color: frappeColors.LightBlue,
    },
    'hljs-section': {
      color: frappeColors.AccentYellow,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: frappeColors.AccentYellow,
    },
    'hljs-selector-tag': {
      color: frappeColors.AccentYellow,
    },
    'hljs-selector-id': {
      color: frappeColors.AccentYellow,
    },
    'hljs-selector-class': {
      color: frappeColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: frappeColors.AccentYellow,
    },
    'hljs-selector-pseudo': {
      color: frappeColors.AccentYellow,
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
  frappeColors,
);
