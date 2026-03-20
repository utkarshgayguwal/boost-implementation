# AI Agent Capabilities with Laravel Boost

This document describes the capabilities available to an AI agent when connected to the Laravel Boost MCP server.

---

## 1. Application Information

The agent can access comprehensive information about the application, including:
- PHP and Laravel versions
- Database engine and configuration
- All installed ecosystem packages with their versions
- Complete list of Eloquent models

**Use case:** Understanding the tech stack and application structure at a glance.

---

## 2. Database Operations

### 2.1 Query Database
Execute read-only SQL queries against the configured database.

**Use cases:**
- Fetch specific data for analysis
- Verify records after operations
- Debug data-related issues

**Example queries:**
```sql
SELECT * FROM users WHERE email = 'admin@example.com'
SELECT COUNT(*) FROM orders WHERE status = 'pending'
```

### 2.2 Inspect Database Schema
View complete database structure including:
- Table names and column types
- Indexes and foreign keys
- Nullable columns and defaults

**Use cases:**
- Understanding relationships between tables
- Writing migrations for new features
- Debugging database-related bugs

---

## 3. Log Inspection

### 3.1 Application Logs
Read the last N entries from Laravel's application log files.

**Use cases:**
- Debugging exceptions and errors
- Tracing user actions
- Monitoring application health

### 3.2 Browser Logs
Read JavaScript console logs and errors from the browser.

**Use cases:**
- Debugging frontend issues
- Finding JavaScript errors
- Inspecting client-side behavior

### 3.3 Last Error
Get details of the most recent error/exception from the application log.

**Use cases:**
- Quick error diagnosis
- Finding the root cause of failures

---

## 4. Documentation Search

Search Laravel's hosted documentation API to get version-specific guidance for:
- Laravel Framework (10.x, 11.x, 12.x)
- Filament (2.x, 3.x, 4.x, 5.x)
- Flux UI (2.x Free, 2.x Pro)
- Inertia (1.x, 2.x)
- Livewire (1.x, 2.x, 3.x, 4.x)
- Nova (4.x, 5.x)
- Pest (3.x, 4.x)
- Tailwind CSS (3.x, 4.x)

**Use cases:**
- Learning how to implement features correctly
- Finding best practices for specific Laravel features
- Understanding package-specific APIs

**Search examples:**
- "rate limiting"
- "queue jobs"
- "form validation"
- "authentication middleware"

---

## 5. URL Generation

Convert relative paths to absolute URLs using the application's base URL.

**Use cases:**
- Generating correct URLs in code
- Verifying route paths
- Testing URL accessibility

---

## 6. Artisan Command Execution

Run any Laravel Artisan command to:
- Manage database migrations
- Clear caches
- Generate code scaffolding
- Run tests
- Interact with queues
- And much more

**Common commands:**
```bash
php artisan route:list
php artisan migrate
php artisan test
php artisan make:model Product
php artisan cache:clear
php artisan config:show app
```

---

## 7. Practical Use Case Examples

### 7.1 Feature Development
1. Search docs for best practices (e.g., "API resources")
2. Check existing models and relationships
3. Create new model, migration, controller
4. Write tests for the feature

### 7.2 Debugging Issues
1. Check browser logs for frontend errors
2. Read application logs for backend errors
3. Query database to verify data state
4. Check configuration settings

### 7.3 Understanding Codebase
1. List all routes and controllers
2. Inspect database schema
3. View application info and installed packages
4. Search docs for specific features

### 7.4 Database Management
1. Run migrations
2. Seed test data
3. Query and verify records
4. Export schema structure

### 7.5 Testing
1. Create feature/unit tests
2. Run specific tests by name
3. Run full test suite
4. Debug failing tests using logs

---

## 8. Key Benefits

| Without Boost | With Boost |
|--------------|------------|
| Generic AI responses | Application-specific context |
| No database access | Full database inspection |
| No log access | Real-time log reading |
| Manual doc search | Automatic version-specific docs |
| Guessing app structure | Direct application insight |

---

## 9. Available MCP Tools Summary

| Tool | Purpose |
|------|---------|
| `application-info` | Get PHP/Laravel versions, packages, models |
| `database-connections` | List database connections |
| `database-query` | Execute read-only SQL queries |
| `database-schema` | Inspect table structure |
| `browser-logs` | Read browser console logs |
| `last-error` | Get most recent error |
| `read-log-entries` | Read application log entries |
| `search-docs` | Query Laravel documentation API |
| `get-absolute-url` | Convert paths to absolute URLs |

---

## 10. Tips for Effective Collaboration

1. **Provide context:** Tell me what you're working on
2. **Ask specific questions:** "Show me users with orders" vs "query the database"
3. **Use my tools:** Let me inspect logs, schema, and docs instead of guessing
4. **Verify changes:** Ask me to run tests after making changes
5. **Iterate:** Feel free to refine requests based on responses
