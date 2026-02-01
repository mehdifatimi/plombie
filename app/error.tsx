'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Une erreur est survenue !</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                Désolé, une erreur inattendue s&apos;est produite. Nous vous prions de nous en excuser.
            </p>
            <Button onClick={() => reset()}>Réessayer</Button>
        </div>
    );
}
