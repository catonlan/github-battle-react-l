module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    //off=0, warn=1, error=2, 如果是数组, 第二项表示参数option
    'consistent-return': 2, //无论有没有返回值都强制要求return语句返回一个值
    eqeqeq: [2, 'smart'], //比较的时候使用严格等于
    'no-console': 1, //不允许出现console语句
    'no-return-assign': 2, //不允许在return语句中使用分配语句
    'no-undef': 2, //不允许未声明的变量
    'no-undefined': 2, //不允许把undefined当做标识符使用
    'no-underscore-dangle': 2, //不允许标识符以下划线开头
    'no-unreachable': 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    'quote-props': 2, //对象中的属性名是否需要用引号引起来
    'accessor-pairs': 2, //对象若定义了 setter 则必须定义相应的 getter
    'arrow-parens': 1, //箭头函数用小括号括起来
    'arrow-spacing': 1, //=>的前/后括号
    'block-scoped-var': 2, //将变量声明放在合适的代码块里
    'brace-style': [1, '1tbs', { allowSingleLine: true }], //大括号风格
    'comma-dangle': [2, 'always'], //对象字面量项尾必须有逗号
    'comma-spacing': [1, { before: false, after: true }], //强制在逗号周围使用空格
    'comma-style': [2, 'last'], //逗号风格
    'consistent-this': [1, 'self'], //当获取当前环境的this是用一样的风格
    'constructor-super': 2, //派生类的构造函数必须调用super()
    'default-case': 1, //在switch语句中需要有default语句
    'dot-notation': [1, { allowPattern: '^[a-z]+(_[a-z]+)+$' }], //获取对象属性的时候使用点号
    'eol-last': 2, //文件以换行符结束
    'func-names': [1, 'as-needed'], //要求命名函数表达式
    'func-style': [0, 'expression'], //函数风格,要求使用函数表达式而不是函数声明
    'generator-star-spacing': [2, 'both'], //生成器函数前后空格
    'guard-for-in': 2, //监视for in循环，防止出现不可预料的情况
    'jsx-quotes': [1, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
    'key-spacing': [1, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    'keyword-spacing': 2, //关键字前后的空格
    'max-depth': 0, //嵌套块深度
    'max-len': 0, //一行最大长度，单位为字符
    'max-nested-callbacks': 0, //回调嵌套深度
    'max-params': 0, //函数最多能有多少个参数
    'max-statements': 0, //函数内最多有几个声明
    'new-parens': 2, //要求调用无参构造函数时有圆括号
    'newline-after-var': 1, //变量声明后必须空一行
    'no-alert': 2, //禁止使用alert confirm prompt
    'no-array-constructor': 2, //禁止使用 Array 构造函数
    'no-bitwise': 1, //不允许使用位运算符
    'no-caller': 2, //不允许使用arguments.callee和arguments.caller属性
    'no-catch-shadow': 2, //不允许try catch语句接受的err变量与外部变量重名
    'no-class-assign': 2, //避免对类名重新赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-console': 0, //不禁用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //条件语句的条件中不允许出现恒定不变的量
    'no-control-regex': 2, //正则表达式中不允许出现控制字符
    'no-debugger': 2, //不允许出现debugger语句
    'no-delete-var': 2, //不允许使用delete操作符,禁止删除变量
    'no-div-regex': 2, //不能使用看起来像除法的正则表达式
    'no-dupe-args': 2, //函数定义的时候不允许出现重复的参数
    'no-dupe-class-members': 2, //对象字面量中不要定义重复的属性
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 1, //如果if语句有return，else里的return不用放在else里
    'no-empty': 2, //块语句中的内容不能为空
    'no-empty-character-class': 2, //正则表达式中不允许出现空的字符组
    'no-eq-null': 1, //不允许对null用==或者!= -xx
    'no-eval': 2, //不允许使用eval()
    'no-ex-assign': 2, //在try catch语句中不允许重新分配异常变量
    'no-extend-native': 2, //不允许扩展原生对象
    'no-extra-bind': 2, //不允许不必要的函数绑定
    'no-extra-boolean-cast': 2, //不允许出现不必要的布尔值转换
    'no-extra-parens': [2, 'functions'], //禁止不必要的括号
    'no-extra-semi': 2, //不允许出现不必要的分号
    'no-fallthrough': 2, //不允许switch按顺序全部执行所有case
    'no-floating-decimal': 2, //不允许浮点数缺失数字
    'no-func-assign': 2, //禁止重复的函数声明
    'no-global-assign': 2, //不允许重新分配原生对象
    'no-implied-eval': 2, //不允许使用隐式eval()
    'no-inline-comments': 0, //不允许行内注释
    'no-inner-declarations': ['error', 'functions'], //不允许在嵌套代码块里声明函数
    'no-invalid-regexp': 2, //不允许在RegExp构造函数里出现无效的正则表达式
    'no-invalid-this': 0, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, //不允许出现不规则的空格
    'no-iterator': 2, //不允许使用__iterator__属性
    'no-label-var': 2, //不允许标签和变量同名
    'no-lone-blocks': 2, //不允许不必要的嵌套代码块
    'no-lonely-if': 0, //不允许else语句内只有if语句
    'no-loop-func': 2, //不允许在循环语句中进行函数声明
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], //不允许混用tab和空格
    'no-multi-spaces': 2, //不允许出现多余的空格
    'no-multi-str': 2, //不允许用\来让字符串换行
    'no-multiple-empty-lines': [1, { max: 2, maxEOF: 1 }], //不允许多个空行
    'no-negated-in-lhs': 2, //不允许在in表达式语句中对最左边的运算数使用取反操作
    'no-nested-ternary': 2, //不允许使用嵌套的三目运算符
    'no-new': 2, //不允许new一个实例后不赋值或者不比较
    'no-new-func': 2, //不允许使用new Function
    'no-new-object': 2, //禁止使用new Object()
    'no-new-wrappers': 2, //不允许使用new String，Number和Boolean对象
    'no-obj-calls': 2, //不允许把全局对象属性当做函数来调用
    'no-octal': 2, //不允许使用八进制字面值
    'no-octal-escape': 2, //不允许使用八进制转义序列
    'no-param-reassign': 0, //不允许重新分配函数参数"no-proto": 2, //不允许使用__proto__属性
    'no-plusplus': 0, //不允许使用++ --运算符
    'no-redeclare': 2, //禁止重复声明变量
    'no-regex-spaces': 2, //正则表达式中不允许出现多个连续空格
    'no-script-url': 2, //不允许使用javascript:void(0)
    'no-self-compare': 2, //不允许自己和自己比较
    'no-sequences': 2, //不允许使用逗号表达式
    'no-shadow': 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-shadow-restricted-names': 2, //js关键字和保留字不能作为函数名或者变量名
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2, //数组中不允许出现空位置
    'no-ternary': 0, //不允许使用三目运算符
    'no-this-before-super': 1, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //不允许抛出字面量错误 throw "error"
    'no-trailing-spaces': 2, //一行最后不允许有空格
    'no-undef': 2, //不能有未定义的变量
    'no-undef-init': 2, //不允许初始化变量时给变量赋值undefined
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-useless-escape': 1, //禁用不必要的转义,配置文件中的 "extends": "eslint:recommended" 属性启用了此规则,在这里放开
    'no-unreachable': 1, //不能有无法执行的代码
    'no-unused-expressions': 2, //不允许无用的表达式
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-use-before-define': 1, //未定义前不能使用
    'no-use-before-define': [2, 'nofunc'], //不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
    'no-var': 2, //使用let和const代替var
    'no-void': 2, //不允许void操作符
    'no-with': 2, //不允许使用with语句
    'one-var': 0, //强制变量声明放在一起
    'operator-assignment': 0, //赋值运算符的风格
    'padded-blocks': [1, 'never'], //禁止块内首尾填充空行
    'prefer-arrow-callback': 0, //要求使用箭头函数作为回调
    'prefer-const': [
      1,
      { destructuring: 'any', ignoreReadBeforeAssign: false },
    ], //建议使用const
    'quote-props': 0, //对象字面量中属性名加引号
    'react/display-name': 0, //防止在React组件定义中丢失displayName
    'react/forbid-prop-types': [2, { forbid: ['any'] }], //禁止某些propTypes
    'react/jsx-boolean-value': 2, //在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 1, //在JSX中验证右括号位置
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-equals-spacing': 2, //在JSX属性中强制或禁止等号周围的空格
    'react/jsx-indent': [1, 2], // 语法缩进控制
    'react/jsx-indent-props': [1, 2], //验证JSX中的props缩进是否为2个
    'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
    'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 限制JSX中单行上的props的最大数量
    'react/jsx-no-bind': 0, //JSX中不允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
    'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
    'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
    'react/jsx-sort-props': 2, //强化props按字母排序
    'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
    'react/no-array-index-key': 0, //防止在数组中遍历中使用数组key做索引
    'react/no-danger': 1, //防止使用危险的JSX属性
    'react/no-deprecated': 1, //不使用弃用的方法
    'react/no-did-mount-set-state': 0, //防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 1, //防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 2, //防止this.state的直接变异
    'react/no-multi-comp': 2, //防止每个文件有多个组件定义
    'react/no-set-state': 0, //防止使用setState
    'react/no-unknown-property': 2, //防止使用未知的DOM属性
    'react/prefer-es6-class': 2, //为React组件强制执行ES5或ES6类
    'react/prop-types': 0, //防止在React组件定义中丢失props验证
    'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
    'react/self-closing-comp': 0, //防止没有children的组件的额外结束标签
    'react/sort-comp': 2, //强制组件方法顺序
    'semi-spacing': [1, { before: false, after: true }], //要求分号前后空格
    'sort-vars': 0, //变量声明时排序
    'spaced-comment': [1, 'always'], //要求在注释前有空白
    'space-before-blocks': [1, 'always'], //块前的空格
    'space-before-function-paren': [
      1,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ], //要求函数定义时括号前的空格
    'space-infix-ops': [1, { int32Hint: false }], //要求操作符周围的空格
    'space-unary-ops': [1, { words: true, nonwords: false }], //一元运算符前后不要加空格
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'vars-on-top': 1, //var必须放在作用域顶部
    'wrap-iife': [2, 'any'], //立即执行表达式的括号风格
    'wrap-regex': 2, //正则表达式字面量用括号括起来
    //'new-cap': [], //构造函数名字首字母要大写
    //'no-labels': [], //不允许标签语句
    //'no-warning-comments': [], //不允许警告备注
    //'prefer-destructuring': [], //优先使用数组和对象解构
    camelcase: [1, { properties: 'always', ignoreDestructuring: false }], //强制驼峰法命名
    complexity: 0, //限制条件语句的复杂度
    curly: [2, 'all'], //强制使用花括号的风格
    eqeqeq: 1, //要求使用 === 和 !==
    indent: [1, 2], //强制使用一致的缩进
    quotes: [1, 'single', { avoidEscape: true }], //要求使用一致的引号风格
    radix: 1, //使用parseInt时强制使用基数来指定是十进制还是其他进制
    semi: 2, //强制使用分号
    strict: [2, 'function'], //强制语句分号结尾
  },
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect',
    },
  },
};
