# Input Examples Reference

> Code examples for all Staylook input components

---

## Text Input

```tsx
<div className="input-group">
  <label htmlFor="email" className="input-label">
    Email Address <span className="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    className="input"
    placeholder="you@example.com"
  />
  <p className="input-helper">We'll never share your email.</p>
</div>
```

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
}

.input-label .required {
  color: var(--color-accent);
}

.input {
  height: 48px;
  padding: 12px 16px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-muted);
  border-radius: var(--radius-input); /* 16px */
  font-size: var(--text-base);
  font-family: var(--font-sans);
  color: var(--color-ink);
  transition: all var(--duration-fast) var(--ease-default);
}

.input::placeholder {
  color: var(--color-ink-muted);
}

/* Hover */
.input:hover:not(:focus):not(:disabled) {
  border-color: var(--outline-calm);
}

/* Focus */
.input:focus {
  background: var(--surface-muted);
  border-color: var(--outline-vibrant);
  outline: none;
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}

/* Disabled */
.input:disabled {
  background: var(--surface-calm);
  color: var(--color-ink-muted);
  opacity: 0.7;
  cursor: not-allowed;
}

.input-helper {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}
```

---

## Textarea

```tsx
<div className="input-group">
  <label htmlFor="message" className="input-label">Message</label>
  <textarea
    id="message"
    className="textarea"
    rows={4}
    placeholder="Type your message..."
  />
</div>
```

```css
.textarea {
  min-height: 120px;
  padding: 12px 16px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-muted);
  border-radius: var(--radius-input);
  font-size: var(--text-base);
  font-family: var(--font-sans);
  color: var(--color-ink);
  resize: vertical;
  transition: all var(--duration-fast) var(--ease-default);
}

.textarea:focus {
  background: var(--surface-muted);
  border-color: var(--outline-vibrant);
  outline: none;
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}
```

---

## Select Dropdown

```tsx
<div className="input-group">
  <label htmlFor="country" className="input-label">Country</label>
  <div className="select-wrapper">
    <select id="country" className="select">
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
    <ChevronDown className="select-icon" />
  </div>
</div>
```

```css
.select-wrapper {
  position: relative;
}

.select {
  width: 100%;
  height: 48px;
  padding: 12px 40px 12px 16px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-muted);
  border-radius: var(--radius-input);
  font-size: var(--text-base);
  color: var(--color-ink);
  cursor: pointer;
  appearance: none;
}

.select-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-ink-muted);
}

.select:focus {
  background: var(--surface-muted);
  border-color: var(--outline-vibrant);
  outline: none;
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}
```

---

## Checkbox

```tsx
<label className="checkbox-label">
  <input type="checkbox" className="checkbox" />
  <span className="checkbox-custom" />
  <span className="checkbox-text">I agree to the terms</span>
</label>
```

```css
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-calm);
  border-radius: 4px;
  transition: all var(--duration-fast) var(--ease-default);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox:checked + .checkbox-custom {
  background: var(--color-ink);
  border-color: var(--color-ink);
}

.checkbox:checked + .checkbox-custom::after {
  content: '✓';
  color: var(--color-base);
  font-size: 12px;
}

.checkbox:focus + .checkbox-custom {
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}

.checkbox-text {
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
}
```

---

## Radio Button

```tsx
<div className="radio-group">
  <label className="radio-label">
    <input type="radio" name="plan" value="basic" className="radio" />
    <span className="radio-custom" />
    <span className="radio-text">Basic Plan</span>
  </label>
  <label className="radio-label">
    <input type="radio" name="plan" value="pro" className="radio" />
    <span className="radio-custom" />
    <span className="radio-text">Pro Plan</span>
  </label>
</div>
```

```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio {
  position: absolute;
  opacity: 0;
}

.radio-custom {
  width: 20px;
  height: 20px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-calm);
  border-radius: 50%;
  transition: all var(--duration-fast) var(--ease-default);
}

.radio:checked + .radio-custom {
  border-color: var(--color-ink);
  border-width: 6px;
}

.radio:focus + .radio-custom {
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}
```

---

## Input States

### Error State

```css
.input-error {
  background: var(--color-error-bg);
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.2);
}

.error-message {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--text-sm);
  color: var(--color-error);
}
```

### Success State

```css
.input-success {
  background: var(--color-success-bg);
  border-color: var(--color-success);
}

.input-success:focus {
  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.2);
}
```

---

## Search Input

```tsx
<div className="search-wrapper">
  <Search className="search-icon" />
  <input
    type="search"
    className="search-input"
    placeholder="Search..."
  />
</div>
```

```css
.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-ink-muted);
  width: 20px;
  height: 20px;
}

.search-input {
  width: 100%;
  height: 48px;
  padding: 12px 16px 12px 48px;
  background: var(--surface-vibrant);
  border: 1px solid var(--outline-muted);
  border-radius: 9999px; /* Pill shape for search */
  font-size: var(--text-base);
}
```

---

*Input Examples — Staylook UI Reference*
