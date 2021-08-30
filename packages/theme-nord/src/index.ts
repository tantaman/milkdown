/* Copyright 2021, Milkdown by Mirone. */
import { injectGlobal } from '@emotion/css';
import { themeFactory } from '@milkdown/core';

import { code, typography } from './font';
import { mixin } from './mixin';
import { color } from './nord';
import { override } from './override';
import { view } from './view';

export const nord = themeFactory({
    font: {
        typography,
        code,
    },
    size: {
        radius: '4px',
        lineWidth: '1px',
    },
    color,
    mixin,
    slots: () => ({
        icon: (id) => {
            const span = document.createElement('span');
            span.className = 'icon material-icons material-icons-outlined';
            span.textContent = id;
            return span;
        },
    }),
    global: (themeTool) => {
        const css = injectGlobal;
        css`
            ${view};
            ${override(themeTool)}
        `;
    },
});