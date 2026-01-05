# UX Laws Detailed Reference

> Complete descriptions and application guidelines for all UX laws

---

## Part 1: Decision & Cognitive Load Laws

### 1.1 Hick's Law

**The Law**: The time it takes to make a decision increases with the number and complexity of choices.

**Key Takeaways**:
1. Minimize choices when response times are critical to decrease decision time
2. Break complex tasks into smaller steps to decrease cognitive load
3. Avoid overwhelming users by highlighting recommended options
4. Use progressive onboarding to minimize cognitive load for new users
5. Be careful not to simplify to the point of abstraction

**Application Guidelines**:

**When Designing Navigation**:
- Limit top-level navigation items to essential categories
- Use progressive disclosure (show more as needed)
- Highlight the most common/recommended paths

**When Designing Forms**:
- Break long forms into multi-step wizards
- Show only relevant fields at each step
- Pre-select sensible defaults

**When Designing Dashboards**:
- Curate what appears on first view
- Allow users to reveal more details on demand
- Highlight the primary action clearly

**Staylook Application**:
- The "One Highlight" rule aligns with Hick's Law—one clear primary action reduces decision time
- Standard buttons help users focus on the single Expressive action
- Progressive disclosure in forms reduces cognitive load

---

### 1.2 Miller's Law

**The Law**: The average person can only keep 7 (plus or minus 2) items in their working memory.

**Key Takeaways**:
1. Don't use the "magical number seven" to justify unnecessary design limitations
2. Organize content into smaller chunks to help users process, understand, and memorize easily
3. Remember that short-term memory capacity varies per individual based on prior knowledge and context

**Application Guidelines**:

**Content Chunking**:
- Group related information into logical chunks
- Use visual separators between groups
- Organize lists into categories when they grow large

**Navigation Design**:
- Group navigation items into logical categories
- Avoid presenting more than 7 top-level options without organization
- Use headings and sections to create hierarchy

**Form Design**:
- Group related fields together
- Use fieldsets with clear legends
- Break long forms into sections

**Staylook Application**:
- Radius hierarchy creates natural visual chunks (Section → Container → Card)
- Card-based layouts help organize information into digestible groups
- Intensity scale progression helps differentiate content levels

---

### 1.3 Tesler's Law (Law of Conservation of Complexity)

**The Law**: For any system there is a certain amount of complexity which cannot be reduced. Someone must deal with it—either the system or the user.

**Key Takeaways**:
1. All processes have a core of complexity that cannot be designed away
2. Ensure as much as possible of the burden is lifted from users by dealing with complexity during design and development
3. Don't build products for an idealized, rational user—people don't always behave rationally
4. Make guidance accessible and contextual (e.g., tooltips with helpful information)

**Application Guidelines**:

**Shift Complexity to the System**:
- Auto-fill forms where possible
- Provide smart defaults
- Handle error prevention automatically
- Validate inputs in real-time

**When Complexity Must Stay with User**:
- Provide clear guidance and helper text
- Use contextual tooltips
- Offer inline instructions
- Break complex tasks into simpler steps

**Balance Simplicity and Power**:
- Simple default mode for most users
- Advanced options for power users
- Progressive disclosure of complexity

**Staylook Application**:
- Use Standard buttons for complex secondary options, Expressive for the simple primary action
- Provide clear visual hierarchy so users can ignore complexity they don't need
- Use helper text and tooltips styled with Ink Muted color

---

### 1.4 Occam's Razor

**The Law**: Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected. In design: the simplest solution is usually the best.

**Application Guidelines**:

**Interface Simplification**:
- Remove unnecessary elements
- Reduce steps in user flows
- Eliminate redundant information
- Use clear, direct language

**Design Decisions**:
- When choosing between solutions, prefer the simpler one
- Question every element: "Is this necessary?"
- Avoid adding features "just in case"

**Staylook Application**:
- The minimal design philosophy aligns with Occam's Razor
- "One Highlight" prevents over-decoration
- Intensity scale uses only three levels (sufficient, not complex)

---

## Part 2: Perception & Attention Laws

### 2.1 Von Restorff Effect (Isolation Effect)

**The Law**: When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.

**Key Takeaways**:
1. Make important information or key actions visually distinctive
2. Use restraint when placing emphasis to avoid elements competing with each other
3. Don't rely exclusively on color—consider color blindness and low vision
4. Carefully consider motion sensitivity when using animation for contrast

**Application Guidelines**:

**Creating Visual Distinctiveness**:
- Use different color for the primary action
- Increase size of important elements
- Add whitespace around key content
- Use different shape or style for emphasis

**Avoiding False Distinctiveness**:
- Ensure distinctive elements are actually important
- Don't make everything stand out (or nothing does)
- Avoid mistaking ads for salient UI elements

**Accessibility Considerations**:
- Don't use color alone for distinction
- Combine color with shape, size, or position
- Ensure sufficient contrast for low vision

**Staylook Application**:
- The "One Highlight" rule IS the Von Restorff Effect in practice
- Expressive color creates distinctiveness among Standard elements
- Pill-shaped buttons stand out from other rounded rectangles

---

### 2.2 Serial Position Effect

**The Law**: Users best remember the first and last items in a series (primacy and recency effects).

**Key Takeaways**:
1. Placing least important items in the middle of lists is helpful—they're less memorable
2. Position key actions on the far left and right within navigation to increase memorization
3. First and last items have highest recall accuracy

**Application Guidelines**:

**Navigation Design**:
- Place most important items at the start and end
- Put secondary items in the middle
- Logo/Home at far left, key CTA at far right

**Lists and Menus**:
- Lead with the most important option
- End with the next most important
- Bury less critical options in the middle

**Content Layout**:
- Start strong with key information
- End with clear call-to-action
- Place supplementary content in the middle

**Staylook Application**:
- Position Expressive button at the end (right side) for recency effect
- Start navigation with most important items
- End user flows with memorable success states

---

### 2.3 Peak-End Rule

**The Law**: People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum of every moment.

**Key Takeaways**:
1. Pay close attention to the most intense moments and final moments of the user journey
2. Identify when your product is most helpful, valuable, or entertaining and design to delight
3. People recall negative experiences more vividly than positive ones

**Application Guidelines**:

**Design for Peak Moments**:
- Make success moments delightful
- Add celebration micro-animations on completion
- Provide positive confirmation messages
- Create "wow" moments at key milestones

**Design for End Moments**:
- End flows with clear success confirmation
- Thank users for completing actions
- Provide helpful next steps
- Leave users feeling accomplished

**Avoid Negative Peaks**:
- Prevent errors wherever possible
- Handle errors gracefully with clear recovery paths
- Never end on an error if avoidable

**Staylook Application**:
- Use Expressive color for success confirmations (peak moments)
- End multi-step flows with celebratory feedback
- Loading → Success transition should feel rewarding

---

## Part 3: Visual Organization Laws (Gestalt Principles)

### 3.1 Law of Proximity

**The Law**: Objects that are near, or proximate to each other, tend to be grouped together.

**Key Takeaways**:
1. Proximity helps establish relationships with nearby objects
2. Elements in close proximity are perceived to share similar functionality or traits
3. Proximity helps users understand and organize information faster

**Application Guidelines**:

**Group Related Elements**:
- Keep related buttons together
- Group form labels near their inputs
- Place icons adjacent to their descriptions

**Separate Unrelated Elements**:
- Add space between unrelated groups
- Use larger gaps to show distinct sections
- Don't cluster unrelated items

**Spacing Hierarchy**:
- Smallest gaps: very related (label-input)
- Medium gaps: related group members
- Larger gaps: between groups
- Largest gaps: between sections

**Staylook Application**:
- 4px spacing grid enforces consistent proximity
- space-2 (8px) for tightly related items
- space-4 (16px) for related group members
- space-8+ (32px+) for separate sections

---

### 3.2 Law of Common Region

**The Law**: Elements tend to be perceived as groups if they share an area with a clearly defined boundary.

**Key Takeaways**:
1. Common region creates clear structure and helps users understand relationships between elements
2. Adding a border around elements is an easy way to create common region
3. Defining a background behind elements also creates common region

**Application Guidelines**:

**Creating Visual Regions**:
- Use cards to group related content
- Apply background colors to define sections
- Add subtle borders to create containers

**Hierarchy of Regions**:
- Larger regions contain smaller regions
- Nesting indicates relationship hierarchy
- Consistent styling for similar container types

**Staylook Application**:
- Radius hierarchy defines nesting: Section (32px) → Container (24px) → Card (16px)
- Cards create common regions for grouped content
- Surface colors (Muted/Calm/Vibrant) help differentiate regions
- Border tokens (Muted/Calm) define boundaries

---

### 3.3 Law of Similarity

**The Law**: Objects that share similar visual characteristics (shape, color, size) are perceived as related.

**Application Guidelines**:

**Creating Visual Consistency**:
- Use same button style for similar actions
- Apply consistent card styling for similar content types
- Match iconography style across the interface

**Indicating Differences**:
- Use different styles for different element types
- Distinguish primary from secondary actions visually
- Color-code categories or statuses

**Staylook Application**:
- All buttons are pill-shaped (similarity within type)
- Expressive vs Standard color creates clear distinction
- Consistent radius for same component types

---

## Part 4: Interaction & Performance Laws

### 4.1 Fitts's Law

**The Law**: The time to acquire a target is a function of the distance to and size of the target.

**Key Takeaways**:
1. Touch targets should be large enough for users to accurately select them
2. Touch targets should have ample spacing between them
3. Touch targets should be placed in areas that allow easy acquisition

**Application Guidelines**:

**Button Sizing**:
- Minimum touch target: 44px × 44px (mobile)
- Larger = faster to tap/click
- Most important actions should be largest

**Button Placement**:
- Place primary actions near where users' attention/cursor is
- Reduce distance between related actions
- Put frequently used actions in easily accessible areas

**Spacing Between Targets**:
- Minimum 8px between clickable elements
- More spacing for touch interfaces
- Prevent accidental taps on wrong target

**Edge and Corner Advantage**:
- Items at screen edges are faster to access (infinite boundary)
- Corners are easiest (two infinite boundaries)
- Consider fixed action buttons at corners

**Staylook Application**:
- Button sizes: sm (32px height), md (44px height), lg (52px height)
- Pill shape maximizes clickable area
- Primary (Expressive) button is visually larger/more prominent
- FAB buttons in corners leverage edge advantage

---

### 4.2 Doherty Threshold

**The Law**: Productivity soars when a computer and its users interact at a pace (<400ms) that ensures neither has to wait on the other.

**Key Takeaways**:
1. Provide system feedback within 400ms to keep users' attention and increase productivity
2. Use perceived performance to improve response time and reduce perception of waiting
3. Animation can visually engage users while loading happens
4. Progress bars help make wait times tolerable
5. Purposefully adding slight delays can increase perceived value and trust

**Application Guidelines**:

**Response Time Targets**:
- Instant: <100ms (button state change)
- Fast: 100-300ms (transitions, simple actions)
- Threshold: 400ms (maximum before feedback needed)
- Loading required: >400ms (show spinner/progress)

**Perceived Performance Techniques**:
- Show skeleton loading immediately
- Use optimistic UI updates
- Pre-load anticipated content
- Use progress indicators for longer operations

**Strategic Delays**:
- Sometimes instant feels "cheap" or untrustworthy
- Add brief delays (1-2 seconds) for important operations
- Show "processing" even if instant to convey work being done

**Staylook Application**:
- Animation duration-fast (150ms) for instant feedback
- Animation duration-base (300ms) for standard transitions
- Animation duration-slow (500ms) for complex animations
- Show loading skeletons for content taking >400ms

---

### 4.3 Goal-Gradient Effect

**The Law**: People accelerate their behavior as they approach a goal. Motivation increases as progress increases.

**Application Guidelines**:

**Show Progress**:
- Use progress bars for multi-step processes
- Show "X of Y completed" indicators
- Visualize how close users are to completion

**Create Milestones**:
- Break long processes into visible steps
- Celebrate milestone completions
- Show what's been accomplished

**Start with Progress**:
- Pre-fill some steps when possible
- Show users they've already started
- "You're 20% done!" feels better than "Start here"

**Staylook Application**:
- Wizard step indicators show progress
- Use Expressive color for completed steps
- Celebrate completion with feedback animation

---

## Part 5: User Expectation Laws

### 5.1 Jakob's Law

**The Law**: Users spend most of their time on other sites. This means users prefer your site to work the same way as all the other sites they already know.

**Key Takeaways**:
1. Users transfer expectations from familiar products to similar new ones
2. Leverage existing mental models to create superior experiences where users focus on tasks, not learning
3. When making changes, minimize discord by allowing users to use familiar version temporarily

**Application Guidelines**:

**Follow Conventions**:
- Logo in top-left links to home
- Navigation in header or left sidebar
- Search accessible from header
- Shopping cart icon top-right (for e-commerce)
- Settings in profile menu

**Use Familiar Patterns**:
- Standard form behaviors (tab order, enter to submit)
- Expected swipe gestures on mobile
- Common icon meanings (hamburger = menu, X = close)

**Innovate Carefully**:
- Innovate on functionality, not basic navigation
- If breaking convention, provide clear guidance
- Allow transition period to new patterns

**Staylook Application**:
- Use familiar component patterns (cards, buttons, forms)
- Follow standard form conventions
- Apply innovative aesthetics (curved, expressive) to familiar structures

---

### 5.2 Postel's Law (Robustness Principle)

**The Law**: Be conservative in what you do, be liberal in what you accept from others. In UX: accept varied user input, provide consistent output.

**Application Guidelines**:

**Accept Flexible Input**:
- Accept various date formats
- Handle phone numbers with/without formatting
- Trim whitespace, fix capitalization
- Be forgiving of minor errors

**Provide Consistent Output**:
- Display information in consistent format
- Use standardized patterns
- Maintain visual consistency

**Staylook Application**:
- Inputs should accept flexible user entry
- Validate and format behind the scenes
- Display standardized, consistent output

---

## Part 6: Memory & Aesthetics Laws

### 6.1 Zeigarnik Effect

**The Law**: People remember uncompleted or interrupted tasks better than completed tasks.

**Application Guidelines**:

**Leverage Incomplete Tasks**:
- Show incomplete profiles as motivation
- Use "complete your setup" prompts
- Display unfinished progress

**Save Progress**:
- Auto-save form progress
- Allow users to return to incomplete tasks
- Don't lose user data

**Staylook Application**:
- Show progress indicators in onboarding
- Highlight incomplete steps
- Use Expressive color for "complete" actions

---

### 6.2 Aesthetic-Usability Effect

**The Law**: Users often perceive aesthetically pleasing design as design that's more usable.

**Key Takeaways**:
1. Aesthetically pleasing design creates positive response in people's brains and leads them to believe the design works better
2. People are more tolerant of minor usability issues when design is aesthetically pleasing
3. Visually pleasing design can mask usability problems—be careful during testing

**Application Guidelines**:

**Invest in Aesthetics**:
- A beautiful interface IS part of usability
- Polish visual details
- Create consistent, harmonious design
- First impressions matter

**Don't Let Beauty Mask Problems**:
- Still test for usability issues
- Beautiful ≠ usable (test both)
- Fix problems even if users don't complain

**Staylook Application**:
- The entire Staylook aesthetic philosophy supports this law
- Premium, curved design increases perceived usability
- "Expressive" moments create emotional response
- Consistent visual language builds trust

---

*UX Laws Detailed Reference — Complete Application Guidelines*
