# UK GDPR Data Processing Agreement templates

Plain-English, ready-to-adapt **UK GDPR** Data Processing Agreement (DPA) and sub-processor disclosure templates for small SaaS teams, indie founders, and lean agencies.

Most DPA templates are written by lawyers for lawyers. These are written to be read by a founder who has ten minutes and a form to fill in, then handed to a lawyer for a final check. Every template is real, complete text, marked up with the clauses you actually have to fill in.

> **This is not legal advice.** These templates are a starting point, not a finished contract. UK data protection law (the UK GDPR and the Data Protection Act 2018) applies to your specific circumstances. Read every clause, fill in every bracket, delete what does not apply, and have a qualified adviser review the result before you sign or publish anything. Use is at your own risk. See [`LICENSE`](LICENSE) and [`DISCLAIMER.md`](DISCLAIMER.md).

## Contents

| File | What it is |
|---|---|
| [`templates/data-processing-agreement.md`](templates/data-processing-agreement.md) | The full DPA. Article 28 UK GDPR processor terms, written in plain English, with a schedule for the details of the processing. |
| [`templates/sub-processor-disclosure.md`](templates/sub-processor-disclosure.md) | A public sub-processor list template plus the change-notice wording for a 30-day disclosure discipline. |
| [`templates/sub-processor-change-notice.md`](templates/sub-processor-change-notice.md) | The short email and on-page notice you send when you add, remove, or change a sub-processor. |
| [`templates/international-transfer-addendum.md`](templates/international-transfer-addendum.md) | The UK International Data Transfer Addendum (IDTA) cover note and when to use it. |
| [`templates/ai-processing-addendum.md`](templates/ai-processing-addendum.md) | AI and machine-learning processing: model disclosure, inference region, training restrictions, AI Act roles |
| [`examples/dpa-worked-example.md`](examples/dpa-worked-example.md) | The DPA filled in for a fictional small SaaS, so you can see what "done" looks like. |
| [`examples/sub-processors.example.json`](examples/sub-processors.example.json) | A machine-readable sub-processor list you can render into a public page. |
| [`examples/sub-processors.example.csv`](examples/sub-processors.example.csv) | The same list as a spreadsheet-friendly CSV. |

## Who this is for

- **Small SaaS and micro-SaaS founders** who have just signed a customer who wants a DPA and do not have a legal team on call.
- **Lean agencies** building sites and apps for clients, who process personal data on the client's behalf and need clean processor terms. This is the exact position most small web studios are in, including [VerySEOly](https://veryseoly.com), the web studio of the company that maintains this repo.
- **Anyone activating a newsletter, analytics, payments, or hosting stack** who now needs to name their sub-processors publicly and keep that list honest.

If you handle other people's personal data as a **processor** (you do things with data on a customer's instructions), you need a DPA. If you decide **why and how** data is processed, you are a **controller**, and you still need to disclose your sub-processors. Most small SaaS businesses are both, on different data.

## Quick start

1. Copy [`templates/data-processing-agreement.md`](templates/data-processing-agreement.md) into your own document.
2. Fill in every `[SQUARE BRACKET]` placeholder. They mark the details that are specific to you: names, addresses, the data you process, and the sub-processors you use.
3. Complete **Schedule 1** (details of processing) and **Schedule 2** (sub-processors). These are the parts customers and regulators actually read.
4. Delete any optional clause that does not apply to you, and its heading.
5. Publish your sub-processor list using [`templates/sub-processor-disclosure.md`](templates/sub-processor-disclosure.md), and commit to a change-notice window.
6. Have a qualified adviser review the whole thing before it becomes a live contract.

## What a good small-SaaS DPA actually needs

UK GDPR Article 28(3) sets out the terms a controller-to-processor contract must contain. In plain English, your DPA has to say that you, as processor:

- only process personal data on **documented instructions** from the controller;
- keep anyone who processes the data under a **duty of confidentiality**;
- take **appropriate security measures** (Article 32);
- do not bring in a **sub-processor** without authorisation, and pass the same obligations down the chain;
- **help the controller** respond to data subject rights requests and to meet their own security, breach, and impact-assessment duties;
- **delete or return** the data at the end of the contract;
- make available the information needed to **demonstrate compliance**, and allow **audits**.

Each of those is a numbered clause in the template, in the same order, so you can check them off against the Article.

## The sub-processor discipline

A DPA is a promise. The sub-processor list is where you keep it. The pattern this repo recommends is simple and cheap to run:

1. **Publish** a plain list of every third party that processes personal data on your behalf: who they are, what they do, and where they are hosted.
2. **Pin the region.** Do not just say a vendor "supports the EU"; record the region you have actually configured, so the list is verifiable.
3. **Give notice before you change it.** Adopt a fixed window (30 days is a sensible default for small SaaS) between announcing a new or changed sub-processor and switching it on, so customers can object.
4. **Log the change.** Keep a short dated history so anyone can see what changed and when.

You can see this discipline running in public on TicketWave HQ's own sub-processor register at [ticketwavehq.com/data-processors](https://ticketwavehq.com/data-processors), with every processor's region and agreement named.

For the wider question of **where** your sub-processors are hosted, and how to keep an EEA/UK-sovereign default without banning the handful of non-EU vendors that are hard to replace, see the companion checklist repo: [github.com/TicketWaveHQ/eu-sovereignty-checklist](https://github.com/TicketWaveHQ/eu-sovereignty-checklist). The DPA templates here answer "what do we promise the customer"; the sovereignty checklist answers "where does the data actually live".

## How the files fit together

```
Customer  ──signs──▶  data-processing-agreement.md   (your Article 28 terms)
                              │
                              ├─ Schedule 1: what data, why, how long
                              └─ Schedule 2: your sub-processors
                                             │
                                             ▼
                              sub-processor-disclosure.md   (the public list)
                                             │
                              when it changes ▼
                              sub-processor-change-notice.md   (30-day notice)

Cross-border? ──▶ international-transfer-addendum.md   (UK IDTA cover note)
```

## British English and plain language

These templates are written in British English and avoid jargon where the law allows. Where a legal term of art is unavoidable (for example "controller", "processor", "personal data breach"), it is used with its UK GDPR meaning and, on first use, briefly explained.

## Contributing

Corrections, plain-English improvements, and additional worked examples are welcome. Please keep three rules:

1. **No fabricated legal certainty.** If a clause is genuinely optional or contested, mark it as such rather than asserting it is required.
2. **Keep the "not legal advice" framing intact** on every template file.
3. **British English**, no em dashes, plain words over Latin where there is a choice.

Open an issue or a pull request. Substantive suggestions from qualified data protection practitioners are especially welcome.

## Licence

Released under [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE). You may use, adapt, and redistribute these templates, including commercially, as long as you give appropriate credit. Attribution to **TicketWave HQ** with a link back to this repository satisfies the licence. See [NOTICE](NOTICE).

## Maintainers and related work

Written and maintained by [Jordan Gilbert](https://veryseoly.com/jordan) ([@sansware](https://github.com/sansware)) and published by [TicketWave HQ](https://ticketwavehq.com) ([@TicketWaveHQ](https://github.com/TicketWaveHQ)), the UK company behind [VerySEOly](https://veryseoly.com), [JorTech](https://www.jortech.co.uk) and [Dacros](https://dacros.com), and used on its own sites. If you would rather have help putting a DPA in place, [Dacros](https://dacros.com) provides UK GDPR and DPIA support for businesses across the UK.

Related repositories:

- [TicketWaveHQ/eu-sovereignty-checklist](https://github.com/TicketWaveHQ/eu-sovereignty-checklist) - where should your data live, and how to keep an EEA/UK-sovereign default.

---

*Not legal advice. Adapt to your case and take qualified advice before you rely on any of this.*
