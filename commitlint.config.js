/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],

  rules: {
    /*
     * TYPE RULE
     * Ensures only allowed types are used
     */
    'type-enum': [
      2, // ❗ error level (0=off, 1=warn, 2=error)
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf', 'build', 'ci']
    ],

    /*
     * SCOPE RULE
     * Scope must NOT be empty → forces module-level clarity
     */
    'scope-empty': [2, 'never'],

    // /*
    //  * SCOPE ENUM (optional but powerful)
    //  * Restricts scopes to predefined modules
    //  */
    // 'scope-enum': [
    //   2,
    //   'always',
    //   ['auth', 'api', 'ui', 'db', 'infra']
    // ],

    /*
     * SUBJECT RULES
     */
    'subject-empty': [2, 'never'], // must exist
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    // prevents "Add Login" or "ADD LOGIN"

    /*
     * HEADER LENGTH
     */
    'header-max-length': [2, 'always', 100],

    // /*
    //  * CUSTOM PATTERN (🔥 MOST IMPORTANT)
    //  * Enforces JIRA ticket at beginning
    //  */
    // 'header-pattern': [
    //   2,
    //   'always',
    //   /^([A-Z]+-\d+)\s(feat|fix|docs|style|refactor|test|chore|perf)\([a-z]+\):\s.+$/
    // ],

    // /*
    //  * ERROR MESSAGE FOR PATTERN
    //  */
    // 'header-pattern-message': [
    //   2,
    //   'always',
    //   'Commit must be: PROJ-123 type(scope): subject'
    // ],
  },
};