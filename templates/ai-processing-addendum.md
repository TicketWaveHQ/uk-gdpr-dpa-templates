# AI Processing Addendum

_An addendum to a Data Processing Agreement, for use where a processor uses AI
or machine-learning systems to process personal data on a controller's behalf._

> **Not legal advice.** A plain-English starting point to adapt and have
> reviewed. See `DISCLAIMER.md`.

---

**Controller:** [CONTROLLER NAME], company number [COMPANY NUMBER]
**Processor:** [PROCESSOR NAME], company number [COMPANY NUMBER]
**Effective:** [DATE]

This Addendum supplements the Data Processing Agreement between the parties
dated [DATE] (the **DPA**). Defined terms carry the meaning given in the DPA.
Where this Addendum conflicts with the DPA, this Addendum prevails in respect of
AI Processing.

---

## 1. What this covers

**"AI Processing"** means processing of Personal Data by or through a machine
learning model, a large language model, an embedding model, an automated
classifier, or an agent acting on the output of any of these.

This Addendum applies whenever the Processor carries out AI Processing on the
Controller's behalf. It does not apply to the Processor's own internal use of
such systems on data that is not the Controller's Personal Data.

## 2. Disclosure of models

The Processor shall maintain, and make available to the Controller on request, a
record for each model used in AI Processing stating:

1. the model provider and the model identifier, **including version**;
2. the geographic region in which **inference** occurs;
3. the provider's **retention period** for inputs and outputs;
4. whether inputs may be used to **train or improve** the provider's models;
5. the date the model was last reviewed, and its review or sunset date.

> **Why version matters.** Providers change model behaviour, terms and regions
> between versions. A record naming only a family — rather than the version in
> use — cannot evidence what was true when the processing happened.

## 3. Inference region

**Inference region is disclosed separately from storage region.** Personal Data
may be stored in an approved region and still be processed elsewhere at
inference time; the two are distinct claims and are recorded distinctly.

Where inference occurs outside the UK and EEA, the transfer is covered by the
international transfer provisions of the DPA and recorded in the transfer
register, with a named owner and an expiry date for the exception.

## 4. Training on Controller data

The Processor shall **not** permit Personal Data to be used to train, fine-tune
or otherwise improve any model, whether the Processor's or a third party's,
except with the Controller's prior written instruction.

Where a provider offers a zero-retention or no-training configuration, the
Processor shall enable it and record that it is enabled.

> **A zero-retention setting mitigates retention. It does not change where
> processing happens.** Both need addressing; neither substitutes for the other.

## 5. Sub-processors

Model providers are Sub-processors and are disclosed as such under the DPA.

Software the Processor **self-hosts** is not a Sub-processor where no Personal
Data is transmitted to the vendor in normal operation. The Processor shall state
that position explicitly in its disclosure rather than omitting the vendor,
together with the basis for it.

## 6. Automated decision-making and human oversight

Where AI Processing contributes to a decision producing legal or similarly
significant effects, the Processor shall record whether the decision is **solely
or partly automated**, and shall ensure human review is meaningful — that is,
the reviewer has the authority, information and practical ability to reach a
different outcome.

The Processor shall notify the Controller before introducing AI Processing into
any workflow producing such decisions.

## 7. Transparency

Where a Data Subject interacts directly with an AI system, the Processor shall
support the disclosure required of the Controller. Where AI Processing generates
or materially manipulates content published to Data Subjects, the Processor
shall support marking of that content.

The parties acknowledge the transparency obligations in Article 50 of Regulation
(EU) 2024/1689 (the **EU AI Act**) and shall treat them as operational.

## 8. Roles under the EU AI Act

The parties shall each assess and record their own role — **provider, deployer,
importer or distributor** — for each AI system in scope, and shall notify the
other where that assessment changes.

> **Integrating a third-party foundation model does not automatically make you a
> GPAI provider.** Role depends on what is actually done, including any
> modification. Assess and record it rather than assuming.

## 9. Prohibited processing

The Processor shall not, without the Controller's prior written instruction, use
AI Processing for:

- biometric identification or categorisation of Data Subjects;
- emotion inference in the workplace or in education;
- evaluation or classification of Data Subjects over time based on social
  behaviour or personal characteristics;
- any purpose prohibited under applicable AI regulation.

## 10. Records, audit and incidents

The Processor shall maintain a record of AI Processing sufficient to demonstrate
compliance, covering purpose, model, data classes, oversight and transparency
measures, and shall make it available under the DPA's audit provisions.

An incident affecting the integrity, confidentiality or availability of Personal
Data in AI Processing — including unintended disclosure through model output —
is a Personal Data Breach under the DPA and is handled under its breach
provisions.

---

**Signed for the Controller**
Name: [NAME] · Position: [POSITION] · Date: [DATE]

**Signed for the Processor**
Name: [NAME] · Position: [POSITION] · Date: [DATE]
