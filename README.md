# ZenMillionaires — CashOutAI marketing draft

**Status: review-branch draft. Not merged or deployed to the live website.**

This keeps ZenMillionaires’ existing black-and-gold identity, free class, free eBook, education sections, biography, and mission. It gives CashOutAI a prominent entry point without presenting the upcoming app redesign as already available to the public.

## What changed

- A CashOutAI navigation link and a hero link point to the new App section immediately below the existing hero.
- The new section introduces five bot rooms (BTC, ETH, SOL, XRP, DOGE), Stocks, a resettable $100 virtual practice balance, and community.
- An original, code-rendered illustration shows the planned Nautilus / practice / chat arrangement. It is labeled “Planned workspace” and contains no live quote, trade, fake chat message, or working-app claim.
- Existing members receive a “Member sign in” action. New members receive an “Open CashOutAI” action. The upcoming-event instructions use the release's actual “Create a practice account” and “Use my existing account” buttons; returning members are directed to “Recover existing account” if needed.
- Those two general entry actions use the verified **https://cashoutai.app/** root. The existing contact/footer app links use that same destination.
- An upcoming free-event section explains email verification, no card requirement, a resettable $100 virtual balance, and the common deadline of Monday, November 30, 2026 at 11:59 p.m. Eastern. The event may open before Friday, as soon as the matching app update is ready. The page does not claim it has opened.
- The owner-approved membership cards show **1 month — $99, 6 months — $499, and Lifetime — $899 (USD)**. Plan actions use the coordinated app routes `?join=monthly`, `?join=six_months`, and `?join=lifetime`. The matching app release must deploy before these marketing links are published.
- Plan entry starts with the member's app account. Each Square purchase is one-time with no automatic renewal. The page explains that the team reviews payment, approves access, and sends a welcome email. It asks members to use their account email at checkout and does not promise instant activation.
- The free educational resources remain separate from app membership.
- The page explains the phone / full-screen big-screen direction as part of the upcoming release.
- Mobile navigation now has sufficient room for the additional entry, a 44-pixel target, Escape-to-close, accurate expanded state, and a no-JavaScript fallback. Keyboard focus and a skip link are included. Content stays visible when reveal animation or JavaScript is unavailable.
- The oversized existing hero title is restrained so the brand name can fit the phone layout.

## Source and exact baseline

Repository: [zenmillonario/zenmillionaires-site](https://github.com/zenmillonario/zenmillionaires-site)

Review branch: `codex/cashoutai-membership-launch-2026-11-25`. Branch creation is verified; publication to the production website is a separate step.

Pinned latest main commit retrieved for this draft: [170c092639c575fd55b674886f8c8fe60c917f29](https://github.com/zenmillonario/zenmillionaires-site/commit/170c092639c575fd55b674886f8c8fe60c917f29), “Add SEO metadata and social preview tags.”

The unchanged baseline is at:

```text
/workspace/scratch/58a0020a1389/review/zenmillionaires-site
```

The complete draft is at:

```text
/workspace/scratch/58a0020a1389/zenmillionaires-launch-draft
```

All **20** baseline files, including the original images and static metadata, were verified against their GitHub blob hashes. The large hero image was retrieved from the existing public website and also matches the pinned repository blob exactly.

The source manifest is stored alongside the baseline as `review/zenmillionaires-source-manifest.json`.

Only these website files changed:

| File | Change |
| --- | --- |
| `index.html` | App content, entry links, semantic and navigation additions |
| `style.css` | App section, responsive layout, focus and fallback behavior |
| `script.js` | Menu accessibility and resilient reveal behavior |

Original images, canonical metadata, structured website metadata, `CNAME`, robots, and sitemap remain the baseline versions. The illustration uses inline SVG, so there are no new external image dependencies.

## Reviewing and applying the draft

Generate the final `changes.patch` after the review files are frozen. It should contain only the three website-file changes against the exact baseline. This README and the draft launch copy are separate review material. Patch/archive artifacts are deliverables and must stay out of Git commits to avoid recursively embedding earlier patches.

In a clean checkout of the pinned repository revision:

```sh
git apply --check /absolute/path/to/changes.patch
git apply /absolute/path/to/changes.patch
```

If main has changed, review the current differences before applying. Do not overwrite unrelated newer content. The draft directory also contains the full page and existing assets for inspection.

A separate [Black Friday copy document](docs/black-friday-copy-DRAFT.md) is **an internal draft only**. The fixed free event and its cutoff are approved, along with the base one-time membership prices. No separate sale price, discount, or coupon is approved. The document is not linked from the page, and no announcement has been sent or scheduled by this work.

## Public messaging before release

Keep the visible “Coming next,” “upcoming,” and “Planned workspace” language until the app update has actually been deployed and checked.

Do not add “live real-time quotes” merely because a provider has a real-time product. The app needs the commercial entitlement, a connected feed, and correct source / delay labeling first. Quote research and an example usage budget are in the app project’s `docs/realtime-quotes-and-launch.md`.

The $100 is a virtual simulation balance, not cash, a reward, a deposit, or something redeemable. The new page says so next to the feature description.

Square is the selected processor, and the owner explicitly chose one-time purchases with manual approval. The app draft uses restricted billing authentication and the supplied reusable Square links as the primary payment path. The owner checks the Square payment, matches the member, records the receipt and purchased plan, then approves paid access and starts the welcome-email process. Registration alone is not payment or paid activation. Ordinary rolling trials remain disabled; the approved email-verified practice event is the limited free-access exception. Existing memberships and trial dates are preserved. The optional automatic integration remains dormant. No Square API credential, webhook, or billing worker is required for this manual workflow.

## Approved free-event terms and entry links

The event opens as soon as the coordinated app release is ready; there is no Friday start restriction. All participants share access through **Monday, November 30, 2026 at 11:59 p.m. Eastern**. The exact server cutoff is **Tuesday, December 1 at 12:00 a.m. America/New_York**, stored as `2026-12-01T05:00:00Z`. Late enrollment does not extend it.

New participants register once and explicitly confirm their email before signing in normally. Existing members use the same account and registered email; password recovery is a separate step when needed. Eligible event access does not need individual administrator approval, a payment, or a card. Accounts and practice history remain after the cutoff, and independent existing memberships retain their original terms.

The event deadline ends event-only access; it does not expire the $99 / $499 / $899 base prices or close paid registration. Paid purchases still require the owner's Square receipt review. Do not promise an approval time or extra event access while a payment awaits review.

The event entry uses **https://cashoutai.app/**. Source review found no public event-signup query: the app reads `event_token` only for emailed confirmation, while `join` accepts the three paid plan IDs. Do not invent `?join=event`, `?trial=1`, or a verification token for a marketing link. The existing paid plan links remain unchanged. Source references are the app release's `frontend/src/practiceEvent/eventModel.mjs`, `frontend/src/billing/billingModel.mjs`, and `frontend/src/App.js`.

Keep the event framed as upcoming until the matching app is deployed, checked, and the event is enabled. When it opens, update only the readiness wording; keep the fixed deadline. At the cutoff, remove or replace the invitation with an event-ended message and preserve the existing-account and paid-membership paths. The current page is static and does not infer live event status.

## Any separate sale still needs approved terms

The free event and base memberships are already approved. A separate discounted offer needs these additional business decisions before it is published:

| Input | Required decision |
| --- | --- |
| Offer | Base options are 1 month, 6 months, or Lifetime; confirm eligibility for any separate promotion |
| Price | Base USD prices are $99, $499, and $899; any promotional amount and taxes / fees presentation still need confirmation |
| Discount | Separately approved percentage or fixed amount on a one-time purchase; exact duration |
| Timing | The free-event cutoff is approved above; any separate discount needs its own start and end with timezone |
| Eligibility | New members, existing members, reactivations, or a defined combination |
| Renewal | Confirmed one-time purchases with no automatic renewal; another fixed term needs a new purchase |
| Existing members | Upgrade, credit, extension, duplicate-purchase and plan-change policy |
| Coupon | Approved code, redemption limits, whether stacking is permitted |
| Customer terms | Cancellation/refund policy, support contact, membership conditions |
| Data | Which quote feed and permissions are included, with any delay or venue limitation |
| Release | Which app features are actually available on the purchase date |

## Square implementation and release requirements

The selected processor, one-time terms, and manual approval process are recorded in the app project's `docs/payment-access-plan.md` and `docs/square-payments-rollout.md`. No payment account was accessed or charged in this website work.

1. Deploy the coordinated app plan-entry routes and billing endpoints before publishing the website's plan buttons.
2. Keep the app in `MEMBERSHIP_APPROVAL_MODE=manual` (the default). The supplied Square links work without API credentials, webhook setup, or the optional reconciliation worker. Confirm the live links retain the owner's one-time terms.
3. Verify the owner can match a paid Square record to the existing member and approve the actual purchased plan with its receipt/reference. A one- or six-month term starts at approval or extends a later current paid-through date; Lifetime has no expiry.
4. Exercise pending, rejected review, repeated receipt, conflicting assignment, renewal, and expired-access cases in an isolated database. Preserve independent legacy/lifetime access. Refunds and corrections remain owner-reviewed; do not invent an automatic revocation policy.
5. Verify the existing welcome-email service using a non-production recipient during the deployment rehearsal. A repeated approval must not send twice; failed/unavailable email must leave the valid membership approved. Service acceptance is not proof of inbox delivery. No email is sent by this website work.
6. Keep upcoming-feature wording until the redesign is deployed and the event is enabled. Use only the approved fixed free-event deadline; no separate sale badge, countdown, discount, or instant paid-activation promise is authorized.

The app’s single-active-session policy should continue to apply to purchased memberships. This policy and exact signup behavior belong in the product flow, not as a substitute for payment confirmation.

## Verification

- Exact hashes confirmed for the complete original 20-file baseline.
- The earlier structural review found no duplicate IDs and confirmed the internal anchors, local assets, and JavaScript syntax. The seven app destinations include the exact three coordinated plan-entry routes and four root app links. All 13 original images remained byte-identical to the baseline.
- Before the event-copy update, the one-time/manual-approval copy passed unpublished visual review at 960-pixel desktop and 390-pixel mobile iframe widths (usable content widths of 945 and 375 pixels). The three price cards, manual-review explanation, same-email instruction, and then-current existing/new-account entry copy fit both layouts without document-level horizontal overflow. The exact three `?join` destinations remain unchanged.
- The event-copy update uses existing layout classes and leaves CSS and JavaScript unchanged. Its event date, no-card enrollment, returning-account instructions, and entry destinations were checked against the app source. HTML checks found no duplicate IDs; all 15 internal anchors, 16 local resources, and heading-label references resolve. The seven app links remain the three exact paid-plan destinations and four root links. The UTC cutoff was checked against America/New_York. This update has not received a fresh browser layout review or been deployed.
- The earlier App section review also covered mobile menu/navigation and both account-entry buttons. Visual review checks page layout and entry destinations; it does not verify live Square payment, manual membership approval, or welcome-email delivery.
- The CSS keeps content visible during the reveal transition; the transform animation remains.
- Source changes are reviewed through the existing GitHub draft pull request. Generated patches, local QA fixtures, and build output are not part of the published source changes.
- Review used an unpublished local preview. The review branch exists; the website has not been merged or deployed. Page review verifies marketing content and entry links, not live Square settlement or membership activation.
