# 👥 TEAM WORKFLOW & COLLABORATION GUIDE

## Team Members

- **Reyvan Evan** - Project Lead, Full-stack Developer
- **Aegner** - Frontend Developer  
- **GitHub Copilot** - AI Development Assistant

---

## 🌳 Git Branch Strategy

### Branch Structure

```
main (production)
  └── develop (integration)
       ├── feature/admin-dashboard (reyvan)
       ├── feature/tenant-management (aegner)
       ├── feature/pos-system (reyvan)
       └── feature/reports (aegner)
```

### Branch Rules

**`main` branch:**
- ✅ Production-ready code only
- 🔒 Protected (no direct push)
- ✅ Deploys automatically to production
- ✅ Requires PR approval

**`develop` branch:**
- ✅ Integration branch for features
- ✅ All features merge here first
- ✅ Test here before merging to main
- 🔒 Protected (no direct push)

**`feature/*` branches:**
- ✅ Individual feature development
- ✅ Branch from `develop`
- ✅ Merge back to `develop` via PR
- ✅ Delete after merge

---

## 🚀 Development Workflow

### Starting New Feature

```bash
# 1. Switch to develop & pull latest
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Work on feature
# ... code code code ...

# 4. Commit changes
git add .
git commit -m "feat: add user context switcher"

# 5. Push to GitHub
git push origin feature/your-feature-name

# 6. Create Pull Request on GitHub
# Go to: https://github.com/reyvanevan/multi-tenant/pulls
# Click: "New Pull Request"
# Base: develop ← Compare: feature/your-feature-name
# Add description & request review

# 7. After PR approved & merged
git checkout develop
git pull origin develop
git branch -d feature/your-feature-name  # delete local branch
```

### Daily Workflow

**Morning (Start of day):**
```bash
git checkout develop
git pull origin develop
git checkout feature/your-current-feature
git merge develop  # get latest changes
```

**Evening (End of day):**
```bash
git add .
git commit -m "wip: work in progress on X feature"
git push origin feature/your-current-feature
```

**Why push incomplete work?**
- ✅ Backup your code
- ✅ Team can see your progress
- ✅ Easy to continue on different device
- ✅ Avoid conflicts

---

## 📝 Commit Message Convention

### Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Examples

**Good commits:**
```bash
git commit -m "feat: add tenant context switcher component"
git commit -m "fix: resolve CORS issue in API client"
git commit -m "docs: update API integration guide"
git commit -m "refactor: optimize product list query"
```

**Bad commits (avoid):**
```bash
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
git commit -m "asdfasdf"
```

---

## 🔄 Pull Request Process

### Creating PR

**Title:** Clear & descriptive
```
✅ Good: "feat: Implement tenant context switcher in header"
❌ Bad: "Update header"
```

**Description Template:**
```markdown
## What does this PR do?
Brief description of the feature/fix

## Changes made
- Added TenantSwitcher component
- Updated header layout
- Added API integration for context switching

## Testing
- [ ] Tested locally
- [ ] No console errors
- [ ] Works in dark mode
- [ ] Responsive on mobile

## Screenshots (if UI changes)
[Add screenshots here]

## Related Issues
Closes #123
```

### Review Checklist

**For Author (before requesting review):**
- [ ] Code works locally
- [ ] No console errors/warnings
- [ ] Follows project style guide
- [ ] Comments added for complex logic
- [ ] No commented-out code
- [ ] No debug console.logs
- [ ] Tests pass (if applicable)

**For Reviewer:**
- [ ] Code is readable & maintainable
- [ ] No obvious bugs
- [ ] Follows project patterns
- [ ] UI looks good (if applicable)
- [ ] No security issues
- [ ] Approved or request changes

### Handling Review Comments

**If changes requested:**
```bash
# Make the requested changes
git add .
git commit -m "fix: address review comments"
git push origin feature/your-feature-name
# PR automatically updates
```

**If approved:**
- Reviewer will merge (or you merge after approval)
- Delete branch after merge
- Pull latest develop

---

## 🚫 Avoiding Conflicts

### File Ownership Strategy

**Reyvan's files (avoid editing unless necessary):**
- `src/routes/admin/*` - Admin pages
- `src/features/pos/*` - POS system
- `src/features/products/*` - Product management

**Aegner's files (avoid editing unless necessary):**
- `src/routes/tenant/*` - Tenant pages
- `src/features/reports/*` - Reports
- `src/features/inventory/*` - Inventory

**Shared files (coordinate before editing):**
- `src/components/ui/*` - UI components
- `src/lib/*` - Utilities
- `src/stores/*` - State stores
- `src/hooks/*` - Custom hooks

### When Editing Shared Files

1. **Check with team first**
   ```
   "Hey, I need to update src/lib/api-client.ts for my feature. Anyone working on this?"
   ```

2. **Pull latest before editing**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature
   git merge develop
   ```

3. **Make small, focused changes**
   - Don't refactor entire file if you only need 1 function
   - Add your function, don't modify existing ones

4. **Push quickly to avoid long-running conflicts**

### Resolving Conflicts

**If git merge has conflicts:**

```bash
# 1. Git will show conflicts
git merge develop
# CONFLICT (content): Merge conflict in src/lib/api-client.ts

# 2. Open conflicted file
# Look for conflict markers:
<<<<<<< HEAD
Your code
=======
Their code
>>>>>>> develop

# 3. Choose what to keep (or combine)
# Remove conflict markers
# Save file

# 4. Mark as resolved
git add src/lib/api-client.ts
git commit -m "merge: resolve conflicts with develop"
git push
```

**Prevention is better than cure:**
- Pull/merge develop often (daily)
- Don't let your branch live too long
- Communicate when touching shared files

---

## 📊 Task Distribution

### Phase-based Split

**Phase 1: Super Admin (Week 1-2)**
- Reyvan: Admin layout, dashboard, tenant list, create tenant
- Aegner: Tenant detail, user management, analytics, settings

**Phase 2: Tenant Dashboard (Week 3-4)**
- Reyvan: Org overview, outlet dashboard, product CRUD
- Aegner: Tenant settings, outlet management, user management, categories

**Phase 3: POS System (Week 5-6)**
- Reyvan: POS screen, product grid, cart, payment
- Aegner: Transaction history, transaction detail, receipt, refund

**Phase 4: Reports & Inventory (Week 7-8)**
- Reyvan: Sales reports, EOD reports, analytics
- Aegner: Inventory management, stock adjustment, suppliers

**Phase 5: Public Pages (Week 9)**
- Reyvan: Landing page, pricing
- Aegner: Signup flow, onboarding wizard

### Daily Standup (Async)

**Every morning, post in team chat:**
```
Today:
- [ ] Task 1
- [ ] Task 2

Blockers:
- None / Waiting for X

Yesterday:
- [x] Completed task A
- [x] Completed task B
```

---

## 🐛 Bug Reporting & Fixing

### Finding a Bug

**Create GitHub Issue:**
```markdown
Title: [BUG] Tenant switcher not updating context

**Description:**
When clicking tenant switcher, the context doesn't update properly.

**Steps to Reproduce:**
1. Login as user with multiple tenants
2. Click tenant switcher
3. Select different tenant
4. Context remains on old tenant

**Expected:** Context should switch to new tenant
**Actual:** Context stays the same

**Environment:**
- Browser: Chrome 120
- OS: Windows 11
- Branch: feature/tenant-context

**Screenshots:**
[Add screenshot]

**Console Errors:**
```
Error: Cannot read property 'id' of undefined
    at TenantSwitcher.tsx:45
```
```

### Fixing Bugs

**Priority:**
- 🔴 Critical (blocks development): Fix immediately
- 🟡 High (affects functionality): Fix within 1 day
- 🟢 Low (minor issue): Fix when available

**Bug fix workflow:**
```bash
# 1. Create bug fix branch
git checkout -b fix/tenant-switcher-context

# 2. Fix the bug
# ... fix code ...

# 3. Test thoroughly
# - Reproduce original issue
# - Verify fix works
# - Check for side effects

# 4. Commit & push
git add .
git commit -m "fix: update tenant context on switcher change"
git push origin fix/tenant-switcher-context

# 5. Create PR with "Fixes #issue-number"
```

---

## 📦 Code Review Best Practices

### For Authors

**Before requesting review:**
- Self-review your own code first
- Test in both light/dark mode
- Check responsive design
- Remove all console.logs
- Update documentation if needed

**During review:**
- Respond to comments promptly
- Don't take feedback personally
- Ask for clarification if needed
- Thank reviewers

### For Reviewers

**Be constructive:**
```
✅ Good: "Consider using useMemo here to optimize re-renders"
❌ Bad: "This is wrong"

✅ Good: "We might want to handle the loading state here"
❌ Bad: "You forgot to add loading"
```

**Focus on:**
- Logic errors
- Performance issues
- Security concerns
- Code maintainability
- User experience

**Don't focus on:**
- Personal style preferences (if it follows project style)
- Minor formatting (we have Prettier)

---

## 🎯 Definition of Done

A task is "Done" when:
- [ ] Code works as expected
- [ ] No console errors
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Works in light & dark mode
- [ ] No TypeScript errors
- [ ] Follows project style guide
- [ ] Comments added for complex logic
- [ ] PR created & approved
- [ ] Merged to develop
- [ ] Tested after merge
- [ ] Documentation updated (if needed)

---

## 🆘 Getting Help

### When Stuck

**1. Try to solve (15 mins)**
- Google the error
- Check documentation
- Review similar code in project

**2. Ask teammate (5 mins response time)**
- Post in team chat with details
- Include error messages
- Share screenshots

**3. Create GitHub Discussion**
- For complex problems
- For architecture decisions
- For team input needed

### Sharing Knowledge

**Found a solution?**
- Document it
- Share with team
- Update docs if useful for future

---

## ✅ Daily Checklist

**Morning:**
- [ ] Pull latest develop
- [ ] Check team chat for updates
- [ ] Post daily standup

**During Work:**
- [ ] Commit often (every 30-60 mins)
- [ ] Write meaningful commit messages
- [ ] Test your changes

**Evening:**
- [ ] Push your work (even if incomplete)
- [ ] Update task status
- [ ] Respond to PR reviews

---

## 🚀 Remember

- **Communication is key** - Over-communicate rather than under-communicate
- **Ask questions** - No question is stupid
- **Review code carefully** - We all make mistakes
- **Be patient** - We're learning together
- **Help each other** - We're a team!

---

**Questions? Ask in team chat or create GitHub Discussion!**

Good luck! 💪
