# Contributing

Thank you for helping make these templates clearer and more useful.

## What we welcome

- Plain-English improvements that keep the legal meaning intact.
- Corrections where a clause is wrong, out of date, or misleading.
- Additional worked examples for different kinds of small SaaS.
- Better structure, tables, or cross-references.

## House rules

1. **No fabricated certainty.** If a clause is optional or contested, mark it as optional or contested. Do not assert that something is required unless it clearly is.
2. **Keep the "not legal advice" line** at the top and bottom of every template file.
3. **British English.** No em dashes; use commas or spaced hyphens. Prefer plain words over Latin.
4. **Truthful examples only.** Example data must be clearly fictional and must not imply a control you are not describing.

## How to propose a change

- Open an issue describing the problem, or
- Open a pull request with the change and a one-line summary in the description.

If you are a qualified data protection practitioner, please say so in your issue or PR; it helps reviewers weigh the suggestion.

## Validation

A lightweight GitHub Actions workflow runs on each pull request, offline. It checks that:

- `examples/sub-processors.example.json` is valid, complete, and names a transfer mechanism for every entry outside the UK (and that the validator still rejects one that does not);
- the example CSV header is unchanged;
- every file in `templates/` and `examples/` carries the "not legal advice" line near the top and at the bottom;
- no file contains an em-dash.

Run the validator yourself with `node scripts/validate-subprocessors.mjs`. See [`.github/workflows/validate.yml`](.github/workflows/validate.yml) and [`scripts/validate-subprocessors.mjs`](scripts/validate-subprocessors.mjs).

## Security

To report a security issue, or guidance here that could lead someone to a materially less compliant position, see [`SECURITY.md`](SECURITY.md).
