
import { Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TelegramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 hover:text-primary transition-colors"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
);

export function AppFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <Link href="#home" className="text-2xl font-bold font-headline text-primary tracking-wider">
              DevFolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Jane Doe. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <Youtube className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
