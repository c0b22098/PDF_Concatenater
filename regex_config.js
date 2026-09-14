// 提出物のURLのリストを7回分用意して、切り替えする用
//
// 各条件は { pattern: "正規表現", description: "画面に表示する平易な説明" } の形式で書く。
// pattern だけを文字列として書いた場合も動作するが、その場合は画面に説明が表示されない。
const REGEX_LISTS = {
    1: [
        { pattern: "https://github\.com/.*/commits/main", description: "コミット履歴のURL" },
        { pattern: "https://github\.com/.*/blob/main/flying_kokaton\.py", description: "flying_kokaton.py のソースコードURL" }
    ],
    2: [
        { pattern: "https://github\.com/.*/commits/main", description: "コミット履歴のURL" },
        { pattern: "https://github\.com/.*/blob/main/dodge_bomb\.py", description: "dodge_bomb.py のソースコードURL" },
        { pattern: "https://github\.com/.*/issues", description: "Issue一覧ページのURL" }
    ],
    3: [
        { pattern: "https://github\.com/.*/blob/main/fight_kokaton\.py", description: "fight_kokaton.py のソースコードURL" },
        { pattern: "https://github\.com/.*/branches", description: "ブランチ一覧ページのURL" },
        { pattern: "https://github\.com/.*/compare/.*", description: "比較（compare）ページのURL" }
    ],
    4: [
        { pattern: "https://github\.com/.*/commits/main", description: "コミット履歴のURL" },
        { pattern: "https://github\.com/.*/blob/main/musou_kokaton\.py", description: "musou_kokaton.py のソースコードURL" }
    ],
    5: [
        { pattern: "https://github\.com/.*/blob/.*/README\.md", description: "README.md のURL" },
        { pattern: "https://github\.com/.*/blob/.*/.*\.py", description: "任意のPythonファイル（.py）のURL" },
        { pattern: "https://github\.com/.*/compare/main\.\.\..*", description: "mainブランチとの比較（compare）ページのURL" }
    ],
    6: [
        { pattern: "https://github\.com/.*/blob/main/README\.md", description: "README.md のURL" },
        { pattern: "https://github\.com/.*/blob/main/.*\.py", description: "任意のPythonファイル（.py）のURL" }
    ],
    7: [
        { pattern: "Nothing", description: "（第7回は条件未設定：どのURLにも合致しません）" }
    ],

    // 例外
    "default": [
        { pattern: ".*bug\\exception.*", description: "（無効な回数が指定されたときのダミー条件。常に合致しません）" }
    ]
};
