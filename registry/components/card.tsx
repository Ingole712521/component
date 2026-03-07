"use client";

import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className = "" }: CardProps) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
    return <h3 className={`text-lg font-semibold text-white ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: CardProps) {
    return <p className={`text-sm text-zinc-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: CardProps) {
    return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
    return <div className={`mt-4 flex items-center gap-2 ${className}`}>{children}</div>;
}
