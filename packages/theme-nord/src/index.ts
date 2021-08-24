import { injectGlobal } from '@emotion/css';
import { themeFactory } from '@milkdown/core';
import { color } from './nord';
import { view } from './view';
import { font, fontCode } from './font';
import { widget } from './widget';

export const nord = themeFactory({
    font: {
        font,
        fontCode,
    },
    size: {
        radius: '4px',
        lineWidth: '1px',
    },
    color,
    widget,
    global: ({ palette, font, widget, size }) => {
        const css = injectGlobal;
        css`
            ${view};
            .milkdown {
                color: ${palette('neutral', 0.87)};
                background: ${palette('surface')};

                position: relative;
                font-family: ${font.font};
                margin-left: auto;
                margin-right: auto;
                ${widget.shadow?.()};
                padding: 3.125rem 1.25rem;
                box-sizing: border-box;

                .editor {
                    outline: none;
                    & > * {
                        margin: 1.875rem 0;
                    }
                }

                .ProseMirror-selectednode {
                    outline: ${size.lineWidth} solid ${palette('line')};
                }

                li.ProseMirror-selectednode {
                    outline: none;
                }

                li.ProseMirror-selectednode::after {
                    ${widget.border?.()}
                }

                @media only screen and (min-width: 72rem) {
                    max-width: 57.375rem;
                    padding: 3.125rem 7.25rem;
                }

                & ::selection {
                    background: ${palette('secondary', 0.38)};
                }
            }
        `;
    },
});