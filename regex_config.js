// 提出物のURLのリストを7回分用意して、切り替えする用
const REGEX_LISTS = {
    1: [
        "https://github\.com/.*/commits/main",
        "https://github\.com/.*/blob/main/flying_kokaton\.py"
    ],
    2: [
        "https://github\.com/.*/commits/main",
        "https://github\.com/.*/blob/main/dodge_bomb\.py",
        "https://github\.com/.*/issues"
    ],
    3: [
        "https://github\.com/.*/blob/main/fight_kokaton\.py",
        "https://github\.com/.*/branches",
        "https://github\.com/.*/compare/.*"
    ],
    4: [
        "https://github\.com/.*/commits/main",
        "https://github\.com/.*/blob/main/musou_kokaton\.py"
    ],
    5: [
        "https://github\.com/.*/blob/.*/README\.md",
        "https://github\.com/.*/blob/.*/.*\.py",
        "https://github\.com/.*/compare/main\.\.\..*"
    ],
    6: [
        "https://github\.com/.*/blob/main/README\.md",
        "https://github\.com/.*/blob/main/.*\.py"
    ],
    7: [
        "Nothing"
    ],

    // 例外
    "default": [
        ".*bug\\exception.*"
    ]
};