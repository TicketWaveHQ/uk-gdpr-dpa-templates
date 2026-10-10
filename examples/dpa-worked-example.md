# Worked example: DPA for a fictional small SaaS

> **Not legal advice, and a fictional example.** "BrightSlot" is invented. The company, people, and numbers below are illustrative, to show what a filled-in DPA looks like. Do not copy the details; copy the shape. Take qualified advice for your own case.

This is [`templates/data-processing-agreement.md`](../templates/data-processing-agreement.md) completed for **BrightSlot**, a fictional two-person SaaS that sells a hosted appointment-booking tool to hair and beauty salons. BrightSlot is the **processor**; each salon is a **controller** of its own customers' data.

Only the parts that change when you fill in the template are shown here.

---

**Parties**

- **Controller:** Meadow Lane Hair Studio Ltd, registered in England under 11223344, at 2 Meadow Lane, Leeds LS1 1AA.
- **Processor:** BrightSlot Ltd, registered in England under 55667788, at 14 Kirkgate, Leeds LS2 2BB.

**Effective date:** the date Meadow Lane first uploads a client record, in practice their sign-up date.

**Clause 1.1 (what the service is):** BrightSlot provides a hosted appointment-booking platform. Salon staff enter client details and bookings; clients receive reminders.

**Clause 3.8 (breach notice window):** 48 hours.

**Clause 4.1 / 4.2 (sub-processors and notice):** general authorisation; 30 days' notice before any change, given by updating the public list at `https://brightslot.example/sub-processors`.

**Clause 6.2 (audit):** 30 days' notice, once a year, more only after a breach or if a supervisory authority requires it.

**Clause 8.1 (law):** England and Wales.

---

## Schedule 1: Details of the processing

| Item | Detail |
|---|---|
| **Subject matter** | Provision of the BrightSlot booking platform to the salon |
| **Duration** | Term of the subscription, plus a 30-day deletion window after cancellation |
| **Nature and purpose** | Storing client and booking records so the salon can manage appointments and send reminders |
| **Type of personal data** | Client name, mobile number, email address, appointment history, free-text notes entered by staff |
| **Categories of data subject** | The salon's clients |
| **Special category data?** | No. Staff are instructed via the app's guidance not to record health or other special-category details in notes. |
| **Frequency** | Continuous while the subscription is active |

## Schedule 2: Authorised sub-processors

| Sub-processor | Purpose | Hosting region | Transfer mechanism (if outside UK) |
|---|---|---|---|
| Northwind Hosting Ltd | Application and database hosting | London, UK | Not applicable |
| Postmark-style email provider | Booking-reminder emails | EEA (Dublin) | UK adequacy |
| SMS gateway provider | Booking-reminder texts | UK | Not applicable |
| Stripe-style payments provider | Subscription billing (salon's card only, not clients') | US | UK IDTA + transfer risk assessment on file |
| Privacy-friendly analytics | Cookie-free, aggregated product usage; no client identifiers | EEA | UK adequacy |

## Schedule 3: Technical and organisational security measures

- **Access control.** Role-based access; only the two founders have production database access; access reviewed each quarter.
- **Authentication.** Multi-factor authentication required on all administrative and hosting accounts.
- **Encryption.** TLS 1.2+ in transit; database encrypted at rest by the hosting provider.
- **Network and application security.** Managed firewall at the host; automated dependency scanning on every deploy; signed webhook verification on the payments and email webhooks.
- **Backups and recovery.** Nightly encrypted backups retained 30 days; restore tested twice a year. Backups overwrite on the 30-day cycle, which is how clause 3.9 deletion reaches backups.
- **Logging and monitoring.** Administrative actions logged; alerting on failed-login spikes.
- **Minimisation.** In-app guidance discourages staff from recording anything beyond what a booking needs.
- **Staff.** Both founders are under confidentiality duties in their service agreements; a written joiner/leaver process is in place for any future hire.
- **Sub-processor management.** Written contracts with each; regions pinned in configuration; public list maintained with 30-day change notice.

---

### What to notice from this example

- **Schedule 1 is specific.** "Client name, mobile, email, appointment history, staff notes" tells a real story. "Personal data" alone would not.
- **The special-category answer is honest.** BrightSlot says "no", and explains the control that keeps it that way. If salons did record health notes, the answer would be "yes" with extra safeguards.
- **The payments row is careful.** It records that only the salon's own card is processed, not clients' cards, which changes the risk. And it names both the IDTA and the risk assessment, because the provider is in the US.
- **Deletion reaches backups through the backup cycle**, not by a promise to surgically wipe every backup, which no small team can honestly make.

For the "where should each of these vendors live" decision that sits behind the region column, see [TicketWaveHQ/eu-sovereignty-checklist](https://github.com/TicketWaveHQ/eu-sovereignty-checklist).

---

*Not legal advice, and a fictional example. Adapt to your case and take qualified advice.*
