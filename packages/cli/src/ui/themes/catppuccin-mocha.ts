/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from './theme.js';

const mochaColors: ColorsTheme = {
  type: 'dark',
  Background: '#1E1E2E',
  Foreground: '#CDD6F4',
  LightBlue: '#89B4FA',
  AccentBlue: '#89B4FA',
  AccentPurple: '#CBA6F7',
  AccentCyan: '#89DCEB',
  AccentGreen: '#A6E3A1',
  AccentYellow: '#F9E2AF',
  AccentRed: '#F38BA8',
  Comment: '#6C7086',
  Gray: '#6C7086',
  GradientColors: ['#CBA6F7', '#89B4FA'],
};

export const CatppuccinMocha: Theme = new Theme(
  'Catppuccin (Mocha)',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: mochaColors.Background,
      color: mochaColors.Foreground,
    },
    'hljs-keyword': {
      color: mochaColors.AccentPurple,
    },
    'hljs-literal': {
      color: mochaColors.AccentPurple,
    },
    'hljs-symbol': {
      color: mochaColors.AccentPurple,
    },
    'hljs-name': {
      color: mochaColors.AccentPurple,
    },
    'hljs-link': {
      color: mochaColors.AccentPurple,
      textDecoration: 'underline',
    },
    'hljs-built_in': {
      color: mochaColors.AccentCyan,
    },
    'hljs-type': {
      color: mochaColors.AccentCyan,
    },
    'hljs-number': {
      color: mochaColors.AccentGreen,
    },
    'hljs-class': {
      color: mochaColors.AccentGreen,
    },
    'hljs-string': {
      color: mochaColors.AccentYellow,
    },
    'hljs-meta-string': {
      color: mochaColors.AccentYellow,
    },
    'hljs-regexp': {
      color: mochaColors.AccentRed,
    },
    'hljs-template-tag': {
      color: mochaColors.AccentRed,
    },
    'hljs-subst': {
      color: mochaColors.Foreground,
    },
    'hljs-function': {
      color: mochaColors.Foreground,
    },
    'hljs-title': {
      color: mochaColors.Foreground,
    },
    'hljs-params': {
      color: mochaColors.Foreground,
    },
    'hljs-formula': {
      color: mochaColors.Foreground,
    },
    'hljs-comment': {
      color: mochaColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: mochaColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: mochaColors.Comment,
    },
    'hljs-meta': {
      color: mochaColors.Gray,
    },
    'hljs-meta-keyword': {
      color: mochaColors.Gray,
    },
    'hljs-tag': {
      color: mochaColors.Gray,
    },
    'hljs-variable': {
      color: mochaColors.AccentBlue,
    },
    'hljs-template-variable': {
      color: mochaColors.AccentBlue,
    },
    'hljs-attr': {
      color: mochaColors.LightBlue,
    },
    'hljs-attribute': {
      color: mochaColors.LightBlue,
    },
    'hljs-builtin-name': {
      color: mochaColors.LightBlue,
    },
    'hljs-section': {
      color: mochaColors.AccentYellow,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: mochaColors.AccentYellow,
    },
    'hljs-selector-tag': {
      color: mochaColors.AccentYellow,
    },
    'hljs-selector-id': {
      color: mochaColors.AccentYellow,
    },
    'hljs-selector-class': {
      color: mochaColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: mochaColors.AccentYellow,
    },
    'hljs-selector-pseudo': {
      color: mochaColors.AccentYellow,
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
  mochaColors,
);
