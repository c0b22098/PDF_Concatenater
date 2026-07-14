// 提出物のURLのリストを7回分用意して、切り替えする用
const REGEX_LISTS = {
    5: [
        "https://github\.com/.*/blob/.*/README\.md",
        "https://github\.com/.*/blob/.*/.*\.py",
        "https://github\.com/.*/compare/main\.\.\..*"
    ],
    6: [
        ".*stackoverflow\\.com.*",
        ".*reddit\\.com.*",
        ".*medium\\.com.*"
    ],
    // 例外
    "default": [
        ".*bug\\exception.*"
    ]
};