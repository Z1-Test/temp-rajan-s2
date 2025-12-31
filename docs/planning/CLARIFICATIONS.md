# Project Clarifications

> Please review and select options or provide input for each question.
> 
> **Instructions:** Check the appropriate option(s) for each question. The planning process will continue once all clarifications are resolved.

---

## Q1: Guest Checkout Support

The PRD mentions both "Customer" (registered users) and "Guest" (unregistered users with limited functionality). Should guests be able to complete purchases?

- [x] **Option A: Guest checkout allowed** — Users can complete purchases without registration. Account creation offered post-purchase.
- [ ] **Option B: Registration required** — Users must create an account before checkout. Cart is preserved during registration.
- [ ] **Option C: Hybrid approach** — Guest checkout allowed, but with reduced features (no order history, wishlist, saved addresses).
- [ ] **Other:** [Please specify]

**Impact:** Affects Identity context scope, checkout flow complexity, and data architecture.

---

## Q2: Cart Persistence Strategy

How should the shopping cart persist across sessions and devices?

- [ ] **Option A: Session-only (anonymous)** — Cart exists only in browser session. Lost on close/clear.
- [x] **Option B: Local storage + Server sync** — Anonymous carts stored locally, synced to server on authentication.
- [ ] **Option C: Server-only (authenticated)** — Cart requires authentication. No anonymous cart support.
- [ ] **Other:** [Please specify]

**Impact:** Affects Ordering context design, user experience for returning visitors, and data storage costs.

---

## Q3: Order Cancellation Policy

Under what conditions can customers cancel orders, and what happens to payments?

- [x] **Option A: Cancel anytime before shipment** — Full refund processed automatically.
- [ ] **Option B: Cancel within time window** — Cancellation allowed only within X hours of order placement.
- [ ] **Option C: Cancel only before payment confirmation** — Once payment confirmed, cancellation requires support.
- [ ] **Option D: No self-service cancellation** — All cancellations handled by support team.
- [ ] **Other:** [Please specify]

**Impact:** Affects Order aggregate state machine, Payment refund flows, and Notification triggers.

---

## Q4: Partial Order Fulfillment

If some items in an order are unavailable or delayed, how should the system handle it?

- [x] **Option A: Ship available items** — Ship what's available, backorder or refund rest.
- [ ] **Option B: Hold entire order** — Wait until all items available before shipping.
- [ ] **Option C: Customer choice** — Present options to customer when partial availability detected.
- [ ] **Option D: Not supported** — Inventory always accurate, assume all items available.
- [ ] **Other:** [Please specify]

**Impact:** Affects Order/Shipment relationship, refund logic, and notification complexity.

---

## Q5: Address Verification

Should shipping addresses be validated before order placement?

- [ ] **Option A: Hard validation required** — Order cannot proceed without verified address (via Shiprocket/Google).
- [x] **Option B: Soft validation (warning)** — User warned about potentially invalid addresses but can proceed.
- [ ] **Option C: No validation** — Accept any address format, validation happens at shipping time.
- [ ] **Other:** [Please specify]

**Impact:** Affects checkout flow, shipping failure rates, and third-party API dependencies.

---

## Q6: Payment Failure Handling

When a payment fails during checkout, what should happen to the cart and order?

- [x] **Option A: Cart preserved, no order created** — User returns to cart to retry or change payment.
- [ ] **Option B: Pending order created** — Order created in "pending payment" state with retry window.
- [ ] **Option C: Cart preserved + notification** — User notified, can retry within session or via email link.
- [ ] **Other:** [Please specify]

**Impact:** Affects Order state machine, abandoned cart tracking, and recovery flows.

---

## Q7: Product Availability Display

How should out-of-stock products be displayed?

- [ ] **Option A: Hide unavailable products** — Only show in-stock items in catalog.
- [x] **Option B: Show with "Out of Stock" badge** — Visible but not purchasable.
- [ ] **Option C: Allow "Notify Me"** — Show unavailable items with back-in-stock notification signup.
- [ ] **Other:** [Please specify]

**Impact:** Affects Catalog queries, Notification context scope, and user experience.

---

## Q8: Multi-Address Order Support

Can a single order ship to multiple addresses?

- [x] **Option A: Single address per order** — One shipping address per order only.
- [ ] **Option B: Multiple addresses allowed** — Items can be split across different addresses in one checkout.
- [ ] **Other:** [Please specify]

**Impact:** Affects Order/Shipment cardinality, checkout complexity, and shipping cost calculation.

---

## Q9: Admin/Back-Office Scope

What administrative capabilities are needed for MVP?

- [ ] **Option A: Firebase Console only** — Use Firebase Console for data management, no custom admin UI.
- [x] **Option B: Basic admin panel** — Product CRUD, order viewing, basic reports.
- [ ] **Option C: Full back-office** — Complete admin with inventory, customer management, analytics dashboards.
- [ ] **Other:** [Please specify]

**Impact:** Affects scope, timeline, and bounded context boundaries.

---

## Q10: Real-Time Inventory

Should inventory levels be checked in real-time during add-to-cart and checkout?

- [ ] **Option A: Real-time validation** — Check inventory on every cart action and at checkout.
- [x] **Option B: Checkout validation only** — Validate inventory only at order placement.
- [ ] **Option C: Optimistic (no real-time)** — Trust catalog availability, handle stockouts post-order.
- [ ] **Other:** [Please specify]

**Impact:** Affects Catalog/Ordering integration, user experience, and system complexity.

---

## Q11: Shipping Cost Calculation

When and how should shipping costs be calculated?

- [x] **Option A: Fixed rate** — Standard shipping cost regardless of order contents.
- [ ] **Option B: Weight/size based** — Calculate based on product dimensions (requires Shiprocket API).
- [ ] **Option C: Location based** — Different rates for different delivery zones.
- [ ] **Option D: Free shipping threshold** — Free above certain order value, calculated otherwise.
- [ ] **Other:** [Please specify]

**Impact:** Affects checkout flow, Shipping context scope, and pricing display.

---

## Q12: Order Tracking Granularity

What level of shipment tracking should be exposed to customers?

- [x] **Option A: Basic status only** — Order Placed → Shipped → Delivered.
- [ ] **Option B: Carrier tracking link** — Redirect to carrier website for detailed tracking.
- [ ] **Option C: Embedded tracking** — Pull and display carrier updates within the platform.
- [ ] **Other:** [Please specify]

**Impact:** Affects Shipping context complexity, webhook handling, and UI requirements.

---

## Resolution Status

| Question | Status | Resolution |
| -------- | ------ | ---------- |
| Q1       | ✅ Resolved | Option A: Guest checkout allowed |
| Q2       | ✅ Resolved | Option B: Local storage + Server sync |
| Q3       | ✅ Resolved | Option A: Cancel anytime before shipment |
| Q4       | ✅ Resolved | Option A: Ship available items |
| Q5       | ✅ Resolved | Option B: Soft validation (warning) |
| Q6       | ✅ Resolved | Option A: Cart preserved, no order created |
| Q7       | ✅ Resolved | Option B: Show with "Out of Stock" badge |
| Q8       | ✅ Resolved | Option A: Single address per order |
| Q9       | ✅ Resolved | Option B: Basic admin panel |
| Q10      | ✅ Resolved | Option B: Checkout validation only |
| Q11      | ✅ Resolved | Option A: Fixed rate |
| Q12      | ✅ Resolved | Option A: Basic status only |

---

> **Note:** All clarifications resolved. Planning may proceed to detailed specification phase.

---

## Secondary Ambiguity Scan (Post-Resolution)

Re-running ambiguity detection after initial clarifications resolved...

### Status: ✅ No Critical Ambiguities Detected

The PRD is now **decision-complete** for roadmap decomposition. The following areas have been validated:

| Category | Status | Notes |
| -------- | ------ | ----- |
| User & Actor | ✅ Clear | Guest and Customer roles defined with checkout permissions |
| Scope Boundaries | ✅ Clear | Out of scope items explicit, MVP boundaries defined |
| Data & State | ✅ Clear | Cart persistence, order states, inventory validation defined |
| Workflow & Control | ✅ Clear | Cancellation, refund, partial fulfillment flows defined |
| Risk & Compliance | ✅ Clear | PCI via Cashfree, data protection explicit |
| Success & Failure | ✅ Clear | KPIs defined with targets, failure handling specified |

### Minor Items for Feature Specification Phase

The following are **not blockers** but should be addressed during feature specification:

1. **Email templates** — Specific notification content (welcome, order confirmation, shipping updates)
2. **Admin role permissions** — Granular admin capabilities beyond "basic panel"
3. **Refund timeline** — SLA for automatic refund processing
4. **Backorder handling** — Customer notification for partial fulfillment scenarios

These items do not affect the roadmap structure and can be resolved during feature blueprint creation.

---

**Conclusion:** PRD is ready for Phase 3 — Feature Roadmap Decomposition.

