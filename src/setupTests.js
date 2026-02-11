import { renderWithProviders } from "./utils/test-utils";
import { page } from "vitest/browser";

page.extend({ renderWithProviders });
