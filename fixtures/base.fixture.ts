import { mergeTests } from '@playwright/test';
import { test as authTest } from '@fixtures/auth.fixture';
import { cleanUpTest } from '@fixtures/cleanup.fixture';

export const test = mergeTests(authTest, cleanUpTest);