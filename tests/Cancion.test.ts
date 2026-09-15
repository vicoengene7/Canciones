import { describe, expect, test } from "vitest";
import { Canciones } from "../src/canciones";

describe("Canciones", () => {
    test("crear una cancion", () => {
        const cancion = new Canciones("Kill This Love");

        expect(cancion).toBeInstanceOf(Canciones);
    });
});