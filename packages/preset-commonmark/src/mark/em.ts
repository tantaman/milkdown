import type { MarkSpec, MarkType } from 'prosemirror-model';
import type { Keymap } from 'prosemirror-commands';
import { toggleMark } from 'prosemirror-commands';
import { SerializerMark, Mark } from '@milkdown/core';
import { markRule } from '../utility';

export class Em extends Mark {
    id = 'em';
    schema: MarkSpec = {
        parseDOM: [
            { tag: 'i' },
            { tag: 'em' },
            { style: 'font-style', getAttrs: (value) => (value === 'italic') as false },
        ],
        toDOM: () => ['em', { class: 'em' }],
    };
    parser = {
        mark: 'em',
    };
    serializer: SerializerMark = {
        open: '*',
        close: '*',
    };
    inputRules = (markType: MarkType) => [
        markRule(/(?:^|[^_])(_([^_]+)_)$/, markType),
        markRule(/(?:^|[^*])(\*([^*]+)\*)$/, markType),
    ];
    keymap = (markType: MarkType): Keymap => ({
        'Mod-i': toggleMark(markType),
    });
}