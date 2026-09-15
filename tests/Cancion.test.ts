import { describe, expect, test } from "vitest";
import { Canciones } from "../src/Canciones.ts";

describe("Canciones", () => {
    test("crear una cancion", () => {
        const cancion = new Canciones("Kill This Love");

        expect(cancion).toBeInstanceOf(Canciones);
    });
});