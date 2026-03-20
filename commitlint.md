# CommitLint Configuration

This project uses [commitlint](https://commitlint.js.org/) to enforce consistent commit message formatting.

## Commit Message Format

```
<type>(<scope>): <subject>
```

### Required Format

```
type(scope): subject
```

- **type** (required) - One of the allowed commit types
- **scope** (optional) - The module or area affected
- **subject** (required) - Brief description (lowercase, no period)

## Allowed Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, no logic change) |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `perf` | Performance improvements |
| `build` | Build system or dependency changes |
| `ci` | CI/CD configuration changes |

## Rules Enforced

| Rule | Level | Description |
|------|-------|-------------|
| `type-enum` | Error | Type must be from the allowed list |
| `subject-empty` | Error | Subject cannot be empty |
| `subject-case` | Error | Subject must be lowercase sentence case |
| `header-max-length` | Error | Header cannot exceed 100 characters |

## Valid Examples

```
feat(auth): add user registration
fix(api): resolve pagination issue
docs: update README
refactor(payments): simplify checkout flow
chore: update dependencies
```

## Invalid Examples

```
Add user registration              # ❌ type required
FEAT: add user registration        # ❌ type must be lowercase
feat: Add User Registration        # ❌ subject must be lowercase
feat: .                            # ❌ subject cannot be empty
feat(auth): add user registration with very long description that exceeds the maximum allowed length and should be shortened significantly # ❌ exceeds 100 chars
```

## Installation

If commitlint is not set up:

```bash
npm install -D @commitlint/cli @commitlint/config-conventional husky
npx husky init
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

## Testing Commits

Check if a commit follows the format:

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose
```

## Customization

Edit `commitlint.config.js` to modify rules. See [commitlint documentation](https://commitlint.js.org/reference/rules.html) for available rules.
