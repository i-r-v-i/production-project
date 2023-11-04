import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('somecl')).toBe('somecl');
    });
    test('with additional class', () => {
        expect(classNames('somecl', {}, ['class1', 'class2']))
            .toBe('somecl class1 class2');
    });
    test('with mods', () => {
        expect(classNames(
            'somecl',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe('somecl class1 class2 hovered scrollable');
    });
    test('with mods false', () => {
        expect(classNames(
            'somecl',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe('somecl class1 class2 hovered');
    });
    // test('with mods undefined', () => {
    //     expect(classNames(
    //         'somecl',
    //         { hovered: true, scrollable: undefined },
    //         ['class1', 'class2'],
    //     )).toBe('somecl class1 class2 hovered');
    // });
});
