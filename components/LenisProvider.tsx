"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <ReactLenis root />
            {children}
        </>
    );
}
