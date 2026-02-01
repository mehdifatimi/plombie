import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Introuvable</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <Link href="/">
                <Button>Retour à l&apos;accueil</Button>
            </Link>
        </div>
    );
}
