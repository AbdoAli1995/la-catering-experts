# Project memory

## Product intent & audience

- Project is a website whose visibility/accessibility is currently being investigated.
- No product domain, target audience, or business context has been established.

## Brand personality & voice

- No brand personality or voice requirements inferred yet.
- User communicates in Arabic; future troubleshooting responses may be most useful in Arabic unless they request otherwise.

## Visual design & UX direction

- No visual, layout, typography, interaction, or responsive-design direction is known.
- The current issue concerns whether the site appears or loads, not its visual presentation.

## Decisions, constraints & rationale

- The reported problem is that the website does not appear.
- Prior investigation found no known code-level issue preventing the pages from appearing, and indicated that the homepage and other pages were present.
- Deployment status and domain/DNS connection are the leading external causes currently considered.
- Diagnosis is blocked without the exact URL and the symptom shown when opening it.
- Distinguish among a blank page, an error message, a “not found” page, and a domain/DNS failure before proposing a fix.
- No authoritative project instructions are currently provided in `.bolt/prompt`.

## Open questions & assumptions

- What exact URL is being opened?
- What does the browser show: blank page, runtime error, 404/not found, DNS error, or another message?
- Is the site deployed and the deployment successful?
- Is the custom domain correctly connected, with DNS records propagated?
- Is the issue reproducible on another browser or network?
- The conclusion that source files and deployment configuration are sound is based on the prior assistant’s report and has not been independently verified in this context.