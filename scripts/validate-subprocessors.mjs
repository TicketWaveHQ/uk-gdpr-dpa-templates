#!/usr/bin/env node
// Validates a sub-processor list in the example JSON shape so the published list
// stays honest: every non-UK entry must name a transfer mechanism, and every entry
// must be complete. Zero dependencies; runs on plain Node.
//
// Usage:
//   node scripts/validate-subprocessors.mjs               # the bundled example
//   node scripts/validate-subprocessors.mjs my-list.json  # your own list

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const file = process.argv[2]
  ? resolve(process.argv[2])
  : join(here, "..", "examples", "sub-processors.example.json");

const REQUIRED_TOP = ["service", "updated", "noticePeriodDays", "subProcessors"];
const REQUIRED_ENTRY = ["name", "purpose", "personalData", "region", "outsideUk"];

let data;
try {
  data = JSON.parse(readFileSync(file, "utf8"));
} catch (err) {
  fail(`could not parse ${file}: ${err.message}`);
}

const errors = [];

for (const key of REQUIRED_TOP) {
  if (!(key in data)) errors.push(`missing top-level key: ${key}`);
}

if (!Array.isArray(data.subProcessors) || data.subProcessors.length === 0) {
  errors.push("subProcessors must be a non-empty array");
} else {
  data.subProcessors.forEach((sp, i) => {
    for (const key of REQUIRED_ENTRY) {
      if (!(key in sp)) errors.push(`subProcessor[${i}] missing key: ${key}`);
    }
    // The core integrity rule: anything hosted outside the UK must name a mechanism.
    if (sp.outsideUk === true && !sp.transferMechanism) {
      errors.push(
        `subProcessor[${i}] "${sp.name}" is outsideUk but has no transferMechanism`
      );
    }
    if (sp.outsideUk === false && sp.transferMechanism) {
      errors.push(
        `subProcessor[${i}] "${sp.name}" is in the UK but names a transfer mechanism`
      );
    }
  });
}

if (typeof data.noticePeriodDays === "number" && data.noticePeriodDays < 1) {
  errors.push("noticePeriodDays must be at least 1");
}

if (errors.length) {
  console.error("sub-processor validation failed:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

console.log(
  `sub-processor list OK: ${data.subProcessors.length} entries, ${data.noticePeriodDays}-day notice.`
);

function fail(msg) {
  console.error(msg);
  process.exit(1);
}
