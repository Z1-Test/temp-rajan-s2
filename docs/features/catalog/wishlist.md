# Feature Specification: Wishlist

## 0. Metadata

```yaml
feature_id: FE-CAT-005
feature_name: "Wishlist"
bounded_context: "Catalog"
status: "Draft"
owner: "Engineering Team"
github_issue: "TBD"
epic: "Epic: Catalog Context"
```

---

## 1. Overview

Allow authenticated users to save products for future purchase consideration.

**Purpose**: Enable users to save products they're interested in for later, increasing engagement and return visits.

**Meaningful Change**: Users can curate a list of products they want to buy later, making it easy to return and complete purchases.

---

## 2. User Problem

Users lose track of products they're interested in:

- Cannot save products without purchasing immediately
- Must remember or bookmark individual products
- No way to compare products of interest
- Lose context between shopping sessions

**Who Experiences This**: Browsers who aren't ready to buy, gift planners, comparison shoppers.

**Business Impact**: Lost sales from forgotten interest, reduced return visits.

---

## 3. Goals

### User Experience Goals

- One-click add/remove from wishlist
- Quick access to wishlist from any page
- Easy move from wishlist to cart
- Persistent wishlist across sessions

### Business / System Goals

- Increase return visits and engagement
- Capture purchase intent signals
- Enable future wishlist-based marketing
- Support gift registry potential

---

## 4. Non-Goals

- Share wishlist publicly — Future enhancement
- Wishlist notifications (back in stock) — Out of scope
- Multiple wishlists — Single list for MVP
- Wishlist analytics dashboard — Future enhancement

---

## 5. Functional Scope

The feature provides:

1. **Add to Wishlist**: Heart icon on products
2. **Remove from Wishlist**: Toggle off or explicit remove
3. **View Wishlist**: Dedicated wishlist page
4. **Move to Cart**: Add wishlist items to cart
5. **Wishlist Count**: Badge showing count in header
6. **Login Prompt**: Prompt to sign in for wishlist access

---

## 6. Dependencies & Assumptions

**Dependencies**:
- FE-IDN-002 (User Authentication)
- FE-CAT-001 (Product Catalog)
- Cloud Firestore for wishlist storage

**Assumptions**:
- Wishlist requires authentication (not guest wishlist)
- Products can be added to wishlist regardless of stock
- Wishlist items persist until removed

---

## 7. User Stories & Experience Scenarios

### User Story 1 — Manage Wishlist

**As an** authenticated user  
**I want** to save products to my wishlist  
**So that** I can easily find and purchase them later

#### Scenario 1.1 — Add Product to Wishlist

**Given** an authenticated user is viewing a product  
**When** they click the wishlist heart icon  
**Then** the product is added to their wishlist  
**And** the icon changes to indicate "in wishlist"  
**And** the wishlist count updates in the header

#### Scenario 1.2 — Remove Product from Wishlist

**Given** a user has products in their wishlist  
**When** they click the filled heart icon  
**Then** the product is removed from their wishlist  
**And** the icon changes to outline (not in wishlist)  
**And** the wishlist count updates

#### Scenario 1.3 — View Wishlist

**Given** a user has products in their wishlist  
**When** they navigate to their wishlist page  
**Then** they see all saved products  
**And** each product shows current price and stock status  
**And** they can access product details from wishlist

#### Scenario 1.4 — Move Wishlist Item to Cart

**Given** a user is viewing their wishlist  
**When** they click "Add to Cart" on a wishlist item  
**Then** the product is added to their cart  
**And** the product remains in the wishlist  
**And** they see confirmation

#### Scenario 1.5 — Empty Wishlist

**Given** a user has no wishlist items  
**When** they view their wishlist page  
**Then** they see a friendly empty state  
**And** they see a prompt to browse products

#### Scenario 1.6 — Unauthenticated Wishlist Attempt

**Given** a guest user tries to add to wishlist  
**When** they click the wishlist icon  
**Then** they see a prompt to sign in  
**And** after signing in, they can add to wishlist

---

## 8. Edge Cases & Constraints

### Experience-Relevant Edge Cases

- **Product removed from catalog**: Removed from wishlist automatically
- **Product goes out of stock**: Remains in wishlist with badge
- **Price changes**: Current price shown (not saved price)
- **Very large wishlist**: Pagination if needed (limit 100 items)

### Technical Constraints

- **Wishlist Size**: Maximum 100 items
- **Authentication Required**: Wishlist requires sign-in
- **Real-time Sync**: Wishlist state synced across tabs
- **Product Data**: Always shows current product data

---

## 9. Implementation Tasks (Execution Agent Checklist)

```markdown
- [ ] T01 [Scenario 1.1] — Implement wishlist heart icon component
- [ ] T02 [Scenario 1.1, 1.2] — Implement add/remove wishlist functionality
- [ ] T03 [Scenario 1.3] — Implement wishlist page view
- [ ] T04 [Scenario 1.4] — Implement move to cart from wishlist
- [ ] T05 [Scenario 1.6] — Implement login prompt for unauthenticated users
- [ ] T06 — Implement wishlist count badge in header
- [ ] T07 [Rollout] — Implement feature flag `feature_fe_cat_005_fl_tbd_wishlist_enabled`
```

---

## 10. Acceptance Criteria (Verifiable Outcomes)

```markdown
- [ ] AC1 [Core Functionality] — Authenticated users can add products to wishlist
- [ ] AC2 [Remove] — Users can remove products from wishlist
- [ ] AC3 [View] — Wishlist page displays all saved products
- [ ] AC4 [Add to Cart] — Wishlist items can be added to cart
- [ ] AC5 [Auth Required] — Guest users prompted to sign in
- [ ] AC6 [Persistence] — Wishlist persists across sessions
- [ ] AC7 [Feature Flag] — Feature toggleable via flag without code deployment
```

---

## 11. Rollout & Risk

### Rollout Strategy

**Feature Flag**: `feature_fe_cat_005_fl_tbd_wishlist_enabled`

**Progressive Rollout**:
1. **0% (Development)**: Internal testing
2. **10% (Alpha)**: Limited access — 1 week
3. **50% (Beta)**: Expanded access — 2 weeks
4. **100% (GA)**: All users

**Validation Criteria**:
- Add/remove works correctly
- Wishlist persists across sessions
- Move to cart functions properly
- Empty state is helpful

**Rollback Plan**: Disable feature flag; hide wishlist icons and page

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Data loss | Firestore persistence, real-time sync |
| Stale product data | Always fetch current product info |
| Large wishlist performance | Pagination, lazy loading |

---

## 12. History & Status

**Status**: Draft  
**Related Epic**: Epic: Catalog Context  
**Dependencies**: FE-IDN-002 (User Authentication), FE-CAT-001 (Product Catalog)  
**Blocks**: None

**Deployment Plan**:
- **Feature Flag**: `feature_fe_cat_005_fl_tbd_wishlist_enabled`
- **Rollout**: 0% → 10% → 50% → 100%
- **Flag Removal**: After 2 weeks at 100% with stable metrics

---

**End of Feature Specification**
