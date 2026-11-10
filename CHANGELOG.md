# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Not legal advice: changes to template wording are drafting improvements, not
a statement that an earlier version was or was not adequate for anyone's case.

## [Unreleased]

Nothing yet.

## [1.0.0] - 2026-11-10

First tagged release. The templates have been public since 2026-07-02.

### Contents

- `templates/data-processing-agreement.md`: Article 28 UK GDPR processor
  terms with Schedules for processing details, sub-processors and security
  measures.
- `templates/sub-processor-disclosure.md` and
  `templates/sub-processor-change-notice.md`: the public list and the
  30-day change-notice discipline.
- `templates/international-transfer-addendum.md`: the cover note for
  transfers outside the UK.
- `templates/ai-processing-addendum.md`: AI and machine-learning
  processing (added on `main` on 2026-09-16).
- `examples/`: a worked DPA for a fictional SaaS, and the sub-processor list
  as JSON and CSV.
- `scripts/validate-subprocessors.mjs`: checks the list's shape and that
  every entry outside the UK names a transfer mechanism.

### Added in this release

- README opens with what the templates are, who they are for, and a
  60-second start.
- `scripts/validate-subprocessors.mjs` takes an optional path, so you can
  check your own list (`node scripts/validate-subprocessors.mjs my-list.json`).
  With no argument it checks the bundled example, as before.
- `SECURITY.md`, pointing to TicketWave HQ's disclosure policy.
- This changelog.
- CI: a test that the validator rejects a non-UK entry with no transfer
  mechanism; a no-em-dash check; manual runs (`workflow_dispatch`).

### Changed

- CI checks the "not legal advice" line near the top **and** at the bottom
  of every template and example, as `CONTRIBUTING.md` already required;
  it used to accept the line anywhere in the file.
- CI uses `actions/checkout@v7`, `actions/setup-node@v7` and Node 24
  (Node 20 reached end of life in April 2026).
- The author's GitHub handle is `@eu-jordangilbert` (`@sansware` is an
  organisation account).

### Fixed

- The transfer cover note, DPA clause 5.2 and the README called the ICO's
  **International Data Transfer Addendum** to the EU Standard Contractual
  Clauses "the IDTA". The IDTA is the ICO's **International Data Transfer
  Agreement**, a separate document. They are now named and abbreviated
  separately (IDTA and Addendum), and the cover note lets you say which one
  you rely on.
- DPA clause 1.2 defined the UK GDPR as "retained" EU law. Since 1 January
  2024 that category is called "assimilated law"; the definition now points
  to section 3(10) of the Data Protection Act 2018 instead of naming the
  category.
- AI processing addendum, section 9: "any purpose prohibited under
  applicable AI regulation" sat in a list of uses a controller's written
  instruction could permit. It is now a separate, unconditional
  prohibition, with a note that EU AI Act Article 5 bans some of the listed
  uses outright where that Act applies.
- AI processing addendum: added the closing "not legal advice" line, and
  removed its em-dashes.

[Unreleased]: https://github.com/TicketWaveHQ/uk-gdpr-dpa-templates/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/TicketWaveHQ/uk-gdpr-dpa-templates/releases/tag/v1.0.0
