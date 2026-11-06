---
name: Permanent catalogue QR destination
description: Catalogue page must remain stable across yearly editions because it will be used on printed QR codes
---

Keep `/katalog` as the permanent public catalogue address when yearly PDF editions change. On desktop, the user wants the PDF to open immediately in a viewport-filling reader, with download and new-tab controls on the right. On mobile, open the PDF directly rather than embedding it in the page. Opening or downloading according to the phone browser is acceptable. Do not add a cover or marketing section before the reader.

**Why:** The user needs a direct catalogue QR code for kurlar.com.tr. Printed QR codes must not require replacement when the catalogue is updated. The user prioritizes immediate mobile access without an extra viewer page.

**How to apply:** Replace edition-specific PDF assets and year labels while preserving the page URL. Do not switch the QR destination to a dated PDF filename.
