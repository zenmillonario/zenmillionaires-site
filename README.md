# ZenMillionaires — CashOutAI marketing draft

**Status: review-branch draft. Not merged or deployed to the live website.**

This keeps ZenMillionaires’ existing black-and-gold identity, free class, free eBook, education sections, biography, and mission. It gives CashOutAI a prominent entry point without presenting the upcoming app redesign as already available to the public.

## What changed

- A CashOutAI navigation link and a hero link point to the new App section immediately below the existing hero.
- The new section introduces five bot rooms (BTC, ETH, SOL, XRP, DOGE), Stocks, a resettable $100 virtual practice balance, and community.
- An original, code-rendered illustration shows the planned Nautilus / practice / chat arrangement. It is labeled “Planned workspace” and contains no live quote, trade, fake chat message, or working-app claim.
- Existing members receive a “Member sign in” action. New members receive a “Start registration” action and the current instruction to select “Don’t have an account? Register.”
- Those two general entry actions use the verified **https://cashoutai.app/** root. The existing contact/footer app links use that same destination.
- The owner-approved membership cards show **1 month — $99, 6 months — $499, and Lifetime — $899 (USD)**. Plan actions use the coordinated app routes `?join=monthly`, `?join=six_months`, and `?join=lifetime`. The matching app release must deploy before these marketing links are published.
- Plan entry starts with the member's app account. Payment runs through Square; the page says confirmation is required before access is activated. It does not promise instant activation or recurring charges.
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

A separate [Black Friday copy document](docs/black-friday-copy-DRAFT.md) is **an internal draft only**. The base membership prices are supplied, while a discount, coupon, campaign deadline, or scheduled event remains unapproved. The document is not linked from the page.

## Public messaging before release

Keep the visible “Coming next,” “upcoming,” and “Planned workspace” language until the app update has actually been deployed and checked.

Do not add “live real-time quotes” merely because a provider has a real-time product. The app needs the commercial entitlement, a connected feed, and correct source / delay labeling first. Quote research and an example usage budget are in the app project’s `docs/realtime-quotes-and-launch.md`.

The $100 is a virtual simulation balance, not cash, a reward, a deposit, or something redeemable. The new page says so next to the feature description.

Square is now the selected processor. The app implementation draft adds restricted billing authentication and a server-created checkout bound to the existing member/order, but production configuration and payment verification have not been completed. When automatic checkout is unavailable, the supplied reusable Square links remain an explicitly labeled manual-review fallback. Registration alone is not a purchase or activation. New trials remain disabled; existing memberships and trial dates are preserved.

## Required inputs for a Black Friday purchase path

The page can be reviewed now. A concrete promotion needs these business decisions before its purchase button or price can be published:

| Input | Required decision |
| --- | --- |
| Offer | Base options are 1 month, 6 months, or Lifetime; confirm eligibility for any separate promotion |
| Price | Base USD prices are $99, $499, and $899; any promotional amount and taxes / fees presentation still need confirmation |
| Discount | Percentage or fixed amount; one payment, first term, or recurring; exact duration |
| Timing | Start and end with timezone; no inferred deadline or artificial countdown |
| Eligibility | New members, existing members, reactivations, or a defined combination |
| Renewal | Renewal date/rate, automatic renewal, term and cancellation behavior |
| Existing members | Upgrade, credit, extension, duplicate-purchase and plan-change policy |
| Coupon | Approved code, redemption limits, whether stacking is permitted |
| Customer terms | Cancellation/refund policy, support contact, membership conditions |
| Data | Which quote feed and permissions are included, with any delay or venue limitation |
| Release | Which app features are actually available on the purchase date |

## Square implementation and release requirements

The selected processor and prices are recorded in the app project's `docs/payment-access-plan.md` and `docs/square-payments-rollout.md`. The implementation draft uses one-time purchases for the supplied terms, not subscriptions. No payment account was accessed or charged in this website work.

1. Deploy the coordinated app plan-entry routes and billing endpoints before publishing the website's plan buttons.
2. Configure the explicit Square enable flag, sandbox/production environment, server credential, expected merchant/location, webhook key, exact notification URL, and verified return URL. The public static links alone do not enable automatic activation.
3. Verify the account-bound API checkout and signed event path: re-read Square's payment/order, require the correct completed USD payment, and apply its grant once.
4. Exercise pending, failure, duplicate, interrupted, unmatched, and refund cases. Preserve independent legacy/lifetime access. Refund policy and any future recurring billing must be defined separately.
5. Keep sandbox transactions test-only. They must never activate real member access. Use the provider's test environment and an isolated app database before the live release.
6. Keep upcoming-feature wording until the redesign is deployed. Do not add a sale badge, countdown, discount, or “activate instantly” promise without approved terms and observed behavior.

The app’s single-active-session policy should continue to apply to purchased memberships. This policy and exact signup behavior belong in the product flow, not as a substitute for payment confirmation.

## Verification

- Exact hashes confirmed for the complete original 20-file baseline.
- Current structural checks passed: no duplicate IDs, all 14 internal anchors and 16 local assets resolve, and JavaScript syntax is valid. The seven app destinations include the exact three coordinated plan-entry routes and four root app links. All 13 original images remain byte-identical to the baseline.
- The current pricing section passed unpublished visual review at 960-pixel desktop and 390-pixel mobile iframe widths (usable content widths of 945 and 375 pixels). All three membership cards fit; they stack on the phone without document-level horizontal overflow. Each mobile plan button is 297 by 50 pixels and carries the correct `?join` intent. The black-and-gold design remains consistent with the existing page.
- The earlier App section review also covered mobile menu/navigation and both account-entry buttons. Current visual review confirms the pricing layout and entry destinations; it does not verify a live Square checkout or payment settlement.
- The CSS keeps content visible during the reveal transition; the transform animation remains.
- The earlier three-file patch applied cleanly and reproduced the prior draft byte for byte. Regenerate and independently apply the final patch after the current pricing and route edits are frozen.
- Review used an unpublished local preview. The review branch exists; the website has not been merged or deployed. Page review verifies marketing content and entry links, not live Square settlement or membership activation.
