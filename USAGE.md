<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore-sdk";

const petstore = new Petstore();

async function run() {
  const result = await petstore.listPets();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->