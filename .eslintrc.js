module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // Точка с запятой в конце
    semi: ['warn', 'always'],
    // Использование кавычек в импортах
    quotes: ['warn', 'single'],
    // Количество пробелов слева строки (отступов)
    indent: 'off',
    // indent: ['warn', 2, { SwitchCase: 1 }],
    // Использование кавычек в свойствах компонент (в JSX)
    'jsx-quotes': ['warn', 'prefer-double'],
    // Обязательное использование const если нет переопределения переменной
    'prefer-const': 'error',
    // Максимальная длинна строки
    'max-len': ['error', { code: 100 }],
    // Обязательные переносы строк внутри круглых скобок параметров
    // 'function-paren-newline': ['error', 'multiline-arguments'],
    // Обязательные переносы строк внутри круглых скобок атрибутов при вызове функции
    // 'function-call-argument-newline': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2, {
      MemberExpression: 1,
      SwitchCase: 1,
      ignoredNodes: ['TSTypeParameterInstantiation'],
    }],
    // Для неиспользуемых переменных выдавать предупреждение, а не ошибку
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', ignoreRestSiblings: true }],
    // Использование консоль логов
    'no-console': 'warn',
    // Вырубаем стандартное слежение за переменными ESLint и врубаем его в ТС ниже
    'no-unused-vars': 'off',
    // Выводить предупреждения если есть присвоение параметрам функции в данной функции
    'no-param-reassign': 'warn',
    // Разрешаем нижние подчеркивания для переменных
    'no-underscore-dangle': 'off',
    /**
     *  Убираем проверку затенения (объявление одинаковых переменных в разных областях)
     *  Криво работает с TS, ругается на enum'ы
    */
    'no-shadow': 'off',
    /**
     * Запятая после последнего свойства/элемента в объектах/массивах.
     * always-multiline - требует запятые в конце, когда последний элемент или свойство
     * находится на другой строке, с закрывающими "]" или "}"
     * Правила тут https://eslint.org/docs/latest/rules/comma-dangle#rule-details
    */
    'comma-dangle': ['error', 'always-multiline'],
    // Отключаем обязательное указание расширения импортируемого файла
    'import/extensions': 'off',
    // Выдавать ошибку при импорте пакетов не указанных в package.json
    'import/no-extraneous-dependencies': 'warn',
    // Отключения правила на относительные пути, т.к. используем абсолютные через алиасы
    'import/no-unresolved': 'off',
    // Обязательное использование "export default"
    'import/prefer-default-export': 'off',
    /**
     * Сортировка импортов вначале файла
     * для работы нужен eslint-plugin-import (просто посмотри есть ли он в node_modules)
     * groups - Сортировка импортов
     * newlines-between - Пустая строка между группами импортов
     * Правила тут https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      'newlines-between': 'always-and-inside-groups',
    }],
    // Количество пробелов слева строки (отступов) для компонент (jsx)
    'react/jsx-indent': ['warn', 2],
    // Запрещаем, использование устаревших методов реакта
    'react/no-deprecated': 'error',
    // Количество пробелов слева строки (отступов) для пропсов компонент
    'react/jsx-indent-props': ['error', 2],
    // Количество передаваемых пропсов на 1 строке (single) и при множестве строк (multi)
    'react/jsx-max-props-per-line': [1, { maximum: { single: 3, multi: 1 } }],
    /**
     * Сортировка передаваемых пропсов в компоненту
     * callbacksLast - Колбеки идут последними
     * shorthandFirst - короткие пропсы (когда передаешь только имя пропса) идут первыми
     * с сохранением сортировки по алфавиту
     * multiline - пропсы имеющие в себе переносы строки (объекты) идут последними (перед колбеками)
     * ignoreCase - игнорирование регистра для сортировки по алфавиту
     * noSortAlphabetically - отключить сортировку по алфавиту
     * reservedFirst = вначале передаются зарезервированные реактом пропсы (прим. key/ref),
     * может принимать массив с пропсами к которым применимо данное правило
     * locale - языковой стандарт (лучше оставлять в авто)
     */
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: 'last',
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
      locale: 'auto',
    }],
    // Форматы импортируемых файлов
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // Отключение обязательного использования дефолтных пропсов
    'react/require-default-props': 'off',
    // Отключение обязательного импорта реакта для jsx, только для 17+ версий реакта
    'react/react-in-jsx-scope': 'off',
    // Разрешаем (выводим предупреждение, а не ошибку) использование спреда для компонент
    'react/jsx-props-no-spreading': 'warn',
    // Разрешаем использование стрелочных функций для объявления компонент
    'react/function-component-definition': 'off',
    // Выводить предупреждение на использование индекса массива в key
    'react/no-array-index-key': 'warn',

  },
  /**
   * Объявление глобальных переменных для линта,
   * true - разрешает перезаписывать глобальную переменную (writable),
   * false - делает её только для чтения (readonly)
   * Особенно применимо для глобальных переменных из DifinePlugin вебпака
  */
  globals: {
    // Добавляем реакт для решения проблемы в файлах глобальной декларации типов (global.d.ts)
    React: false,
    __IS_DEV__: true,
  },
};
